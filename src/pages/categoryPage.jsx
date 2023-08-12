import { Helmet } from 'react-helmet';
import * as React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import PropTypes, { oneOfType } from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import AppProviders from '../providers/AppProviders';
import Layout from '../components/templates/Layout/Layout';
import Wrapper from '../components/molecules/Wrapper/Wrapper';
import EmptyBlog from '../components/atoms/EmptyBlog/EmptyBlog';
import SinglePostExcerpt from '../components/molecules/SinglePostExcerpt/SinglePostExcerpt';
import { StyledMainBlog } from '../components/molecules/MainBlog/MainBlog.styles';
import Loading from '../components/atoms/Loading/Loading';
import { ScrollEndMessage } from '../components/atoms/ScrollEndMessage/ScrollEndMessage.styles';

const CategoryPage = ({ pageContext }) => {
	const { posts } = pageContext.category;

	const [postsList, setPostList] = useState(
		pageContext.category.posts.slice(0, 2)
	);
	const [hasMore, setHasMore] = useState(true);

	const { t } = useTranslation();

	const getMorePosts = () => {
		const newPosts = posts.slice(postsList.length, postsList.length + 2);
		// eslint-disable-next-line no-shadow
		setPostList((postsList) => [...postsList, ...newPosts]);
	};

	useEffect(() => {
		setHasMore(posts.length > postsList.length);
	}, [postsList]);

	return (
		<AppProviders>
			<Helmet>
				<title>
					{t('category.title')} {pageContext.category.Name} | Nerdistry
				</title>
				<meta name="description" content="Lorem ipsum" />
			</Helmet>
			<Layout title="Blog" subtitle={pageContext.category.Name}>
				<Wrapper
					title={pageContext.category.Description || t('category.description')}
				>
					{pageContext.category.posts.length ? (
						<StyledMainBlog
							as={InfiniteScroll}
							dataLength={postsList.length}
							next={getMorePosts}
							hasMore={hasMore}
							loader={<Loading />}
							endMessage={
								<ScrollEndMessage>{t('category.postsEnd')}</ScrollEndMessage>
							}
						>
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

export const query = graphql`
	query ($language: String!) {
		locales: allLocale(filter: { language: { eq: $language } }) {
			edges {
				node {
					ns
					data
					language
				}
			}
		}
	}
`;
