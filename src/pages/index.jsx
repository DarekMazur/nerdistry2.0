import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Wrapper from '../components/molecules/Wrapper/Wrapper';
import Layout from '../components/templates/Layout/Layout';
import AppProviders from '../providers/AppProviders';
import FeaturedPosts from '../components/molecules/FeaturedPosts/FeaturedPosts';
import { getFeaturedPosts } from '../utils/helpers/getFeaturedPosts';
import { posts } from '../utils/mock';
import RecentProjects from '../components/molecules/RecentProjects/RecentProjects';
import MainBlog from '../components/molecules/MainBlog/MainBlog';
import MainAbout from '../components/molecules/MainAbout/MainAbout';

const test = 'Lorem Ipsum';

const IndexPage = () => {
	const homeData = useStaticQuery(graphql`
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
			strapiHome {
				FeaturedPostsTitle
				RecentProjectsTitle
				ProjectsLink
				BlogTitle
				BlogLink
				AboutTitle
				AboutCover {
					name
					url
				}
				AboutContent
			}
		}
	`);

	const sortedPosts = posts.sort((a, b) => {
		const dateA = new Date(a.attributes.publishedAt);
		const dateB = new Date(b.attributes.publishedAt);
		return dateB - dateA;
	});

	return (
		<AppProviders>
			<Layout>
				{getFeaturedPosts(homeData.allStrapiPost.edges).length ? (
					<Wrapper
						title={homeData.strapiHome?.FeaturedPostsTitle || 'Nice to read'}
						isWide
					>
						<FeaturedPosts
							posts={getFeaturedPosts(homeData.allStrapiPost.edges)}
						/>
					</Wrapper>
				) : null}
				<Wrapper
					title={homeData.strapiHome?.RecentProjectsTitle || 'Recent projects'}
				>
					<RecentProjects />
				</Wrapper>
				<Wrapper title={homeData.strapiHome?.BlogTitle || 'Latest on blog'}>
					<MainBlog posts={sortedPosts.slice(0, 4)} />
				</Wrapper>
				{homeData.strapiHome?.AboutContent ? (
					<Wrapper title={homeData.strapiHome.AboutTitle || 'About'}>
						<MainAbout content={homeData.strapiHome} />
					</Wrapper>
				) : null}
			</Layout>
		</AppProviders>
	);
};

export default IndexPage;

export function Head() {
	return <title>{test}</title>;
}
