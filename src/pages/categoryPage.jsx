import { Helmet } from 'react-helmet';
import * as React from 'react';
import PropTypes, { oneOfType } from 'prop-types';
import AppProviders from '../providers/AppProviders';
import Layout from '../components/templates/Layout/Layout';
import Wrapper from '../components/molecules/Wrapper/Wrapper';
import EmptyBlog from '../components/atoms/EmptyBlog/EmptyBlog';
import SinglePostExcerpt from '../components/molecules/SinglePostExcerpt/SinglePostExcerpt';
import { StyledMainBlog } from '../components/molecules/MainBlog/MainBlog.styles';

const CategoryPage = ({ pageContext }) => {
	console.log(pageContext);

	return (
		<AppProviders>
			<Helmet>
				<title>Category {pageContext.category.Name} | Nerdistry</title>
				<meta name="description" content="Lorem ipsum" />
			</Helmet>
			<Layout title="Blog" subtitle={pageContext.category.Name}>
				<Wrapper
					title={pageContext.category.Description || 'All posts from category'}
				>
					{pageContext.category.posts.length ? (
						<StyledMainBlog>
							{pageContext.category.posts.map((post) => (
								<SinglePostExcerpt
									key={post.id}
									post={post}
									postsLength={pageContext.category.posts.length}
								/>
							))}
						</StyledMainBlog>
					) : (
						<EmptyBlog />
					)}
				</Wrapper>
			</Layout>
		</AppProviders>
	);
};

export default CategoryPage;

CategoryPage.propTypes = {
	pageContext: PropTypes.shape({
		category: PropTypes.shape({
			Name: PropTypes.string,
			Description: PropTypes.string,
			posts: PropTypes.arrayOf(oneOfType([PropTypes.object])),
		}),
	}).isRequired,
};
