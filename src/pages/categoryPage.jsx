import { Helmet } from 'react-helmet';
import * as React from 'react';
import { useI18next, useTranslation } from 'gatsby-plugin-react-i18next';
import PropTypes, { oneOfType } from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useEffect, useState } from 'react';
import { graphql, navigate } from 'gatsby';
import AppProviders from '../providers/AppProviders';
import Layout from '../components/templates/Layout/Layout';
import Wrapper from '../components/molecules/Wrapper/Wrapper';
import EmptyBlog from '../components/atoms/EmptyBlog/EmptyBlog';
import SinglePostExcerpt from '../components/molecules/SinglePostExcerpt/SinglePostExcerpt';
import { StyledMainBlog } from '../components/molecules/MainBlog/MainBlog.styles';
import Loading from '../components/atoms/Loading/Loading';
import { ScrollEndMessage } from '../components/atoms/ScrollEndMessage/ScrollEndMessage.styles';

const CategoryPage = ({ pageContext }) => {
	const { category } = pageContext;

	const [postsList, setPostList] = useState(
		category && category.posts
			? category.posts
					.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
					.slice(0, 2)
			: []
	);
	const [hasMore, setHasMore] = useState(true);

	const { t } = useTranslation();
	const { i18n } = useI18next();

	const getMorePosts = () => {
		if (category) {
			const newPosts = category.posts
				.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
				.slice(postsList.length, postsList.length + 2);
			// eslint-disable-next-line no-shadow
			setPostList((postsList) => [...postsList, ...newPosts]);
		}
	};

	React.useEffect(() => {
		if (!category) {
			navigate('/404');
		}
	}, []);

	useEffect(() => {
		setHasMore(category.posts?.length > postsList.length);
	}, [postsList]);

	return (
		<AppProviders>
			{category ? (
				<>
					<Helmet>
						<title>
							{t('category.title')} {category.Name} | Nerdistry
						</title>
						<meta name="description" content={t('category.metaDescription')} />
					</Helmet>
					<Layout title="Blog" subtitle={category.Name}>
						{i18n.resolvedLanguage === 'ru' ? (
							<Wrapper title={t('main.feturedTitle')} isWide isBig />
						) : (
							<Wrapper
								title={category.Description || t('category.description')}
							>
								{category.posts?.filter((post) => post.publishedAt !== null)
									?.length ? (
									<StyledMainBlog
										as={InfiniteScroll}
										dataLength={postsList.length}
										next={getMorePosts}
										hasMore={hasMore}
										loader={<Loading />}
										endMessage={
											<ScrollEndMessage>
												{t('category.postsEnd')}
											</ScrollEndMessage>
										}
									>
										{category.posts
											.filter((post) => post.publishedAt !== null)
											.map((post) => (
												<SinglePostExcerpt
													key={post.id}
													post={post}
													postsLength={category.posts.length}
												/>
											))}
									</StyledMainBlog>
								) : (
									<EmptyBlog />
								)}
							</Wrapper>
						)}
					</Layout>
				</>
			) : (
				<div>Something goes wrong...</div>
			)}
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
