import * as React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import { useEffect, useState } from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import InfiniteScroll from 'react-infinite-scroll-component';
import PropTypes, { oneOfType } from 'prop-types';
import Layout from '../components/templates/Layout/Layout';
import AppProviders from '../providers/AppProviders';
import EmptyBlog from '../components/atoms/EmptyBlog/EmptyBlog';
import SinglePostExcerpt from '../components/molecules/SinglePostExcerpt/SinglePostExcerpt';
import { StyledMainBlog } from '../components/molecules/MainBlog/MainBlog.styles';
import Wrapper from '../components/molecules/Wrapper/Wrapper';
import Loading from '../components/atoms/Loading/Loading';
import { ScrollEndMessage } from '../components/atoms/ScrollEndMessage/ScrollEndMessage.styles';

const BlogPage = ({ pageContext }) => {
	const { t } = useTranslation();

	const posts = pageContext.blog.allStrapiPost.edges;

	const [postsList, setPostList] = useState(
		pageContext.blog.allStrapiPost.edges.slice(0, 2)
	);
	const [hasMore, setHasMore] = useState(true);

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
				<title>Blog | Nerdistry</title>
				<meta
					name="description"
					content={
						pageContext.blog.strapiIdentity.Slogan || t('identification.slogan')
					}
				/>
			</Helmet>
			<Layout title="Blog" isSubtitleHidden>
				<Wrapper
					title={
						pageContext.blog.strapiIdentity.Slogan || t('identification.slogan')
					}
				>
					{pageContext.blog.allStrapiPost.edges.length ? (
						<StyledMainBlog
							as={InfiniteScroll}
							dataLength={postsList.length}
							next={getMorePosts}
							hasMore={hasMore}
							loader={<Loading />}
							endMessage={
								<ScrollEndMessage>{t('blog.postsEnd')}</ScrollEndMessage>
							}
						>
							{postsList.map((post) => (
								<SinglePostExcerpt
									key={post.node.id}
									post={post.node}
									postsLength={postsList.length}
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
export default BlogPage;

BlogPage.propTypes = {
	pageContext: PropTypes.shape({
		blog: PropTypes.shape({
			allStrapiPost: PropTypes.shape({
				edges: PropTypes.arrayOf(oneOfType([PropTypes.object])),
			}),
			strapiIdentity: PropTypes.shape({
				Slogan: PropTypes.string,
			}),
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
