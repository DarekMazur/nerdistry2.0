import * as React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import PropTypes, { oneOfType } from 'prop-types';
import Wrapper from '../components/molecules/Wrapper/Wrapper';
import Layout from '../components/templates/Layout/Layout';
import AppProviders from '../providers/AppProviders';
import FeaturedPosts from '../components/molecules/FeaturedPosts/FeaturedPosts';
import { getFeaturedPosts } from '../utils/helpers/getFeaturedPosts';
import RecentProjects from '../components/molecules/RecentProjects/RecentProjects';
import MainBlog from '../components/molecules/MainBlog/MainBlog';
import MainAbout from '../components/molecules/MainAbout/MainAbout';
import EmptyBlog from '../components/atoms/EmptyBlog/EmptyBlog';

const IndexPage = ({ pageContext }) => {
	const { t } = useTranslation();

	return (
		<AppProviders>
			<Helmet>
				<title>{pageContext.home.strapiIdentity.Title || t('main.home')}</title>
				<meta
					name="description"
					content={pageContext.home.strapiIdentity.Slogan}
				/>
			</Helmet>

			<Layout title="" subtitle="">
				{getFeaturedPosts(pageContext.home.allStrapiPost.edges).length ? (
					<Wrapper
						title={
							pageContext.home.strapiHome?.FeaturedPostsTitle ||
							t('main.feturedTitle')
						}
						isWide
						isBig
					>
						<FeaturedPosts
							posts={getFeaturedPosts(pageContext.home.allStrapiPost.edges)}
						/>
					</Wrapper>
				) : null}
				<Wrapper
					title={
						pageContext.home.strapiHome?.RecentProjectsTitle ||
						t('main.recentProjects')
					}
					isBig
				>
					<RecentProjects
						allProjects={
							pageContext.home.strapiHome?.ProjectsLink || '/projects'
						}
					/>
				</Wrapper>
				<Wrapper
					title={pageContext.home.strapiHome?.BlogTitle || t('main.blogLatest')}
					isBig
				>
					{pageContext.home.allStrapiPost.edges.length === 0 ? (
						<EmptyBlog />
					) : (
						<MainBlog
							posts={pageContext.home.allStrapiPost.edges.slice(0, 4)}
							allPost={pageContext.home.strapiHome?.BlogLink || '/blog'}
						/>
					)}
				</Wrapper>
				{pageContext.home.strapiHome?.AboutContent ? (
					<Wrapper
						title={pageContext.home.strapiHome.AboutTitle || t('main.about')}
						isBig
					>
						<MainAbout content={pageContext.home.strapiHome} />
					</Wrapper>
				) : null}
			</Layout>
		</AppProviders>
	);
};

export default IndexPage;

IndexPage.propTypes = {
	pageContext: PropTypes.shape({
		home: PropTypes.shape({
			allStrapiPost: PropTypes.objectOf(oneOfType([PropTypes.array])),
			strapiHome: PropTypes.shape({
				FeaturedPostsTitle: PropTypes.string,
				RecentProjectsTitle: PropTypes.string,
				ProjectsLink: PropTypes.string,
				BlogTitle: PropTypes.string,
				BlogLink: PropTypes.string,
				AboutContent: PropTypes.string,
				AboutTitle: PropTypes.string,
			}),
			strapiIdentity: PropTypes.shape({
				Title: PropTypes.string,
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
