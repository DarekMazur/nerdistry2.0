import * as React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { useI18next, useTranslation } from 'gatsby-plugin-react-i18next';
import { useEffect, useState } from 'react';
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
	const { i18n } = useI18next();

	const { allStrapiPost } = useIndexContent();
	const { strapiIdentity } = usePageIdentity();
	const { strapiHome } = usePageMeta();

	const [pageIdentity, setPageIdentity] = useState();
	const [pageHome, setPageHome] = useState();

	useEffect(() => {
		setPageIdentity(JSON.parse(strapiIdentity.internal.content));
		setPageHome(JSON.parse(strapiHome.internal.content));
	}, []);

	return (
		<AppProviders>
			<Helmet>
				<title>{pageIdentity?.Title || t('main.home')} | Nerdistry</title>
				<meta name="description" content={pageIdentity?.Slogan} />
			</Helmet>

			<Layout title="" subtitle="">
				{i18n.resolvedLanguage === 'ru' ? (
					<Wrapper title={t('main.feturedTitle')} isWide isBig />
				) : (
					<>
						{getFeaturedPosts(allStrapiPost.edges).length ? (
							<Wrapper
								title={pageHome?.FeaturedPostsTitle || t('main.feturedTitle')}
								isWide
								isBig
							>
								<FeaturedPosts posts={getFeaturedPosts(allStrapiPost.edges)} />
							</Wrapper>
						) : null}
						<Wrapper
							title={pageHome?.RecentProjectsTitle || t('main.recentProjects')}
							isBig
						>
							<RecentProjects
								allProjects={pageHome?.ProjectsLink || '/projects'}
							/>
						</Wrapper>
						<Wrapper title={pageHome?.BlogTitle || t('main.blogLatest')} isBig>
							{allStrapiPost.edges.length === 0 ? (
								<EmptyBlog />
							) : (
								<MainBlog
									posts={allStrapiPost.edges.slice(0, 4)}
									allPost={pageHome?.BlogLink || '/blog'}
								/>
							)}
						</Wrapper>
						{pageHome?.AboutContent?.data ? (
							<Wrapper title={pageHome.AboutTitle || t('main.about')} isBig>
								<MainAbout content={pageHome} />
							</Wrapper>
						) : null}
					</>
				)}
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
