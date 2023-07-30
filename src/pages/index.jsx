import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';
import Wrapper from '../components/molecules/Wrapper/Wrapper';
import Layout from '../components/templates/Layout/Layout';
import AppProviders from '../providers/AppProviders';
import FeaturedPosts from '../components/molecules/FeaturedPosts/FeaturedPosts';
import { getFeaturedPosts } from '../utils/helpers/getFeaturedPosts';
import RecentProjects from '../components/molecules/RecentProjects/RecentProjects';
import MainBlog from '../components/molecules/MainBlog/MainBlog';
import MainAbout from '../components/molecules/MainAbout/MainAbout';
import EmptyBlog from '../components/atoms/EmptyBlog/EmptyBlog';

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
			strapiIdentity {
				Title
				Slogan
			}
		}
	`);

	return (
		<AppProviders>
			<Helmet>
				<title>{homeData.strapiIdentity.Title || 'Home'}</title>
				<meta name="description" content={homeData.strapiIdentity.Slogan} />
			</Helmet>

			<Layout title="" subtitle="">
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
					<RecentProjects
						allProjects={homeData.strapiHome?.ProjectsLink || '/'}
					/>
				</Wrapper>
				<Wrapper title={homeData.strapiHome?.BlogTitle || 'Latest on blog'}>
					{homeData.allStrapiPost.edges.length === 0 ? (
						<EmptyBlog />
					) : (
						<MainBlog posts={homeData.allStrapiPost.edges.slice(0, 4)} />
					)}
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
