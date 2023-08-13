import * as React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import { useEffect, useState } from 'react';
import { useI18next, useTranslation } from 'gatsby-plugin-react-i18next';
import InfiniteScroll from 'react-infinite-scroll-component';
import Layout from '../components/templates/Layout/Layout';
import AppProviders from '../providers/AppProviders';
import EmptyBlog from '../components/atoms/EmptyBlog/EmptyBlog';
import SinglePostExcerpt from '../components/molecules/SinglePostExcerpt/SinglePostExcerpt';
import { StyledMainBlog } from '../components/molecules/MainBlog/MainBlog.styles';
import Wrapper from '../components/molecules/Wrapper/Wrapper';
import Loading from '../components/atoms/Loading/Loading';
import { ScrollEndMessage } from '../components/atoms/ScrollEndMessage/ScrollEndMessage.styles';
import { useIndexContent } from '../hooks/useIndexContent';
import { usePageIdentity } from '../hooks/usePageIdentity';

const BlogPage = () => {
	const { t } = useTranslation();
	const { i18n } = useI18next();

	const { allStrapiPost } = useIndexContent();
	const { strapiIdentity } = usePageIdentity();

	const posts = allStrapiPost.edges;

	const [postsList, setPostList] = useState(allStrapiPost.edges.slice(0, 2));
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
					content={strapiIdentity.Slogan || t('identification.slogan')}
				/>
			</Helmet>
			<Layout title="Blog" isSubtitleHidden>
				{i18n.resolvedLanguage === 'ru' ? (
					<Wrapper title={t('main.feturedTitle')} isWide isBig />
				) : (
					<Wrapper title={strapiIdentity.Slogan || t('identification.slogan')}>
						{allStrapiPost.edges.length ? (
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
				)}
			</Layout>
		</AppProviders>
	);
};
export default BlogPage;

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
