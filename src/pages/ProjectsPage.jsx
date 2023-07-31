import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useEffect, useState } from 'react';
import Layout from '../components/templates/Layout/Layout';
import AppProviders from '../providers/AppProviders';
import { StyledTechList } from '../components/atoms/TechList/TechList.styles';

const ProjectsPage = () => {
	const [projects, setProjects] = useState('');
	const [images, setImages] = useState([]);
	const [techList, setTechList] = useState([]);

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
				<title>Projects | Nerdistry</title>
				<meta name="description" content="lorem ipsum" />
			</Helmet>
			<Layout title="BLog" subtitle="Lorem ipsum">
				{projects && projects.length === images.length
					? projects.map((project, index) => (
							<>
								<h3>{project.name}</h3>
								<img src={images[index].urls.regular} alt={project.name} />
								<p>{project.description}</p>
								<StyledTechList>
									{techList[index]
										? Object.keys(techList[index]).map((techName) => (
												<span>{techName}</span>
										  ))
										: null}
								</StyledTechList>
								<a href={project.html_url} target="_blank" rel="noreferrer">
									GitHub
								</a>
								{project.homepage ? (
									<a href={project.homepage} target="_blank" rel="noreferrer">
										Link
									</a>
								) : null}
							</>
					  ))
					: null}
			</Layout>
		</AppProviders>
	);
};

export default ProjectsPage;
