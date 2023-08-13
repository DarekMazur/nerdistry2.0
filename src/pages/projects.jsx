import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useEffect, useState } from 'react';
import { useI18next, useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql } from 'gatsby';
import Layout from '../components/templates/Layout/Layout';
import AppProviders from '../providers/AppProviders';
import EmptyBlog from '../components/atoms/EmptyBlog/EmptyBlog';
import Wrapper from '../components/molecules/Wrapper/Wrapper';
import Project from '../components/molecules/Project/Project';
import ProjectIconsWrapper from '../components/atoms/ProjectIconsWrapper/ProjectIconsWrapper';
import { blasts } from '../utils/data/blastFromThePast';
import { StyledProjectIconWrapper } from '../components/atoms/ProjectIconWrapper/ProjectIconWrapper.styles';

const ProjectsPage = () => {
	const [projects, setProjects] = useState('');
	const [images, setImages] = useState([]);
	const [techList, setTechList] = useState([]);

	const { t } = useTranslation();
	const { i18n } = useI18next();

	useEffect(() => {
		const getCoverImage = async () => {
			try {
				const res = await fetch(
					`https://api.unsplash.com/search/photos?client_id=${process.env.GATSBY_PUBLIC_UNSPLASH_TOKEN}&query=technology&page=1&per_page=${projects.length}`
				);
				const fetchedImages = await res.json();

				setImages(fetchedImages.results);
			} catch (error) {
				// eslint-disable-next-line no-console
				console.warn(error);
			}
		};
		getCoverImage();
	}, [projects]);

	useEffect(() => {
		async function getProjectsList() {
			const res = await fetch(
				`${process.env.GATSBY_PUBLIC_GITHUB_API_LINK}/users/${process.env.GATSBY_PUBLIC_GITHUB_USER}/repos`
			);
			const unsortedRepos = await res.json();
			const repos = unsortedRepos.sort((a, b) => {
				const dateA = new Date(a.created_at);
				const dateB = new Date(b.created_at);
				return dateB - dateA;
			});

			setProjects(repos);
		}
		getProjectsList();
	}, []);

	useEffect(() => {
		const testFetch = async (url) => {
			const res = await fetch(url);
			const data = await res.json();

			setTechList((prevState) => [...prevState, data]);
		};

		if (projects) {
			projects.map((project) => testFetch(project.languages_url));
		}
	}, [projects]);

	return (
		<AppProviders>
			<Helmet>
				<title>{t('project.title')} | Nerdistry</title>
				<meta name="description" content="lorem ipsum" />
			</Helmet>
			<Layout title={t('project.title')} isSubtitleHidden>
				{i18n.resolvedLanguage === 'ru' ? (
					<Wrapper title={t('main.feturedTitle')} isWide isBig />
				) : (
					<>
						<Wrapper title={t('project.subTitle')} isBig isWide>
							{projects && projects.length === images.length ? (
								projects.map((project, index) => (
									<Project
										key={project.name}
										projectData={project}
										index={index}
										image={images[index].urls.regular}
										techList={techList}
									/>
								))
							) : (
								<EmptyBlog />
							)}
							<StyledProjectIconWrapper>
								<p>Check more: </p>
								<ProjectIconsWrapper ghLink={process.env.GATSBY_GITHUB_LINK} />
							</StyledProjectIconWrapper>
						</Wrapper>
						<Wrapper title={t('project.older')} isWide>
							{blasts.map((project) => (
								<Project
									key={project.name}
									projectData={project}
									image={project.image}
									techList={project.techStack}
								/>
							))}
						</Wrapper>
					</>
				)}
			</Layout>
		</AppProviders>
	);
};

export default ProjectsPage;

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
