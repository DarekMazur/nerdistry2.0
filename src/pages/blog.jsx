import * as React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/templates/Layout/Layout';
import AppProviders from '../providers/AppProviders';
import EmptyBlog from '../components/atoms/EmptyBlog/EmptyBlog';
import SinglePostExcerpt from '../components/molecules/SinglePostExcerpt/SinglePostExcerpt';
import { StyledMainBlog } from '../components/molecules/MainBlog/MainBlog.styles';
import Wrapper from '../components/molecules/Wrapper/Wrapper';

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
	return (
		<AppProviders>
			<Helmet>
				<title>Blog | Nerdistry</title>
				<meta name="description" content="" />
			</Helmet>
			<Layout title="Blog">
				<Wrapper title={blogData.strapiIdentity.Slogan || `Blog`}>
					{blogData.allStrapiPost.edges.length ? (
						<StyledMainBlog>
							{blogData.allStrapiPost.edges.map((post) => (
								<SinglePostExcerpt
									key={post.node.id}
									post={post.node}
									postsLength={blogData.allStrapiPost.edges.length}
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
