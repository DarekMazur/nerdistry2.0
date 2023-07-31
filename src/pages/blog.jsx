import * as React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Layout from '../components/templates/Layout/Layout';
import AppProviders from '../providers/AppProviders';
import EmptyBlog from '../components/atoms/EmptyBlog/EmptyBlog';
import SinglePostExcerpt from '../components/molecules/SinglePostExcerpt/SinglePostExcerpt';
import { StyledMainBlog } from '../components/molecules/MainBlog/MainBlog.styles';
import Wrapper from '../components/molecules/Wrapper/Wrapper';
import Loading from '../components/atoms/Loading/Loading';
import { ScrollEndMessage } from '../components/atoms/ScrollEndMessage/ScrollEndMessage.styles';

const BlogPage = () => {
	const blogData = useStaticQuery(graphql`
		query {
			allStrapiPost(sort: { publishedAt: DESC }) {
				edges {
					node {
						id
						Title
						Description
						Content
						publishedAt
						Tags
						Feature
						categories {
							Name
						}
						CoverImage {
							url
						}
					}
				}
			}
			strapiIdentity {
				Slogan
			}
		}
	`);

	const posts = blogData.allStrapiPost.edges;

	const [postsList, setPostList] = useState(
		blogData.allStrapiPost.edges.slice(0, 2)
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
						blogData.strapiIdentity.Slogan ||
						`Z notatnika młodego deva, czyli od juniora do zera. Czy tam na odwrót... ;)`
					}
				/>
			</Helmet>
			<Layout title="Blog" isSubtitleHidden>
				<Wrapper
					title={
						blogData.strapiIdentity.Slogan ||
						`Z notatnika młodego deva, czyli od juniora do zera. Czy tam na odwrót... ;)`
					}
				>
					{blogData.allStrapiPost.edges.length ? (
						<StyledMainBlog
							as={InfiniteScroll}
							dataLength={postsList.length}
							next={getMorePosts}
							hasMore={hasMore}
							loader={<Loading />}
							endMessage={
								<ScrollEndMessage>
									To by było na tyle. Wróć później po więcej 😊
								</ScrollEndMessage>
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
