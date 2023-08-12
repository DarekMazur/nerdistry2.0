import * as React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import Wrapper from '../components/molecules/Wrapper/Wrapper';
import Layout from '../components/templates/Layout/Layout';
import AppProviders from '../providers/AppProviders';
import FeaturedPosts from '../components/molecules/FeaturedPosts/FeaturedPosts';
import { getFeaturedPosts } from '../utils/helpers/getFeaturedPosts';
import RecentProjects from '../components/molecules/RecentProjects/RecentProjects';
import MainBlog from '../components/molecules/MainBlog/MainBlog';
import MainAbout from '../components/molecules/MainAbout/MainAbout';
import EmptyBlog from '../components/atoms/EmptyBlog/EmptyBlog';
import { useIndexContent } from '../hooks/useIndexContent';
import { usePageIdentity } from '../hooks/usePageIdentity';
import { usePageMeta } from '../hooks/usePageMeta';

const IndexPage = () => {
	const { t } = useTranslation();

	const { allStrapiPost } = useIndexContent();
	const { strapiIdentity } = usePageIdentity();
	const { strapiHome } = usePageMeta();

	return (
		<AppProviders>
			<Helmet>
				<title>{strapiIdentity.Title || t('main.home')}</title>
				<meta name="description" content={strapiIdentity.Slogan} />
			</Helmet>
			<Layout title="" subtitle="">
				{getFeaturedPosts(allStrapiPost.edges).length ? (
					<Wrapper
						title={strapiHome?.FeaturedPostsTitle || t('main.feturedTitle')}
						isWide
						isBig
					>
						<FeaturedPosts posts={getFeaturedPosts(allStrapiPost.edges)} />
					</Wrapper>
				) : null}
				<Wrapper
					title={strapiHome?.RecentProjectsTitle || t('main.recentProjects')}
					isBig
				>
					<RecentProjects
						allProjects={strapiHome?.ProjectsLink || '/projects'}
					/>
				</Wrapper>
				<Wrapper title={strapiHome?.BlogTitle || t('main.blogLatest')} isBig>
					{allStrapiPost.edges.length === 0 ? (
						<EmptyBlog />
					) : (
						<MainBlog
							posts={allStrapiPost.edges.slice(0, 4)}
							allPost={strapiHome?.BlogLink || '/blog'}
						/>
					)}
				</Wrapper>
				{strapiHome?.AboutContent ? (
					<Wrapper title={strapiHome.AoutTitle || t('main.about')} isBig>
						<MainAbout content={strapiHome} />
					</Wrapper>
				) : null}
			</Layout>
		</AppProviders>
	);
};

export default IndexPage;

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
