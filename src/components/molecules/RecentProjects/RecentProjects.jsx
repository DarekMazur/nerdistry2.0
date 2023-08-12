import * as React from 'react';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import SingleProject from '../SingleProject/SingleProject';
import DefaultCover from '../../../assets/images/defaultProjectCover.jpg';
import { StyledRecentProjects } from './RecentProjects.styles';
import More from '../../atoms/More/More';

const RecentProjects = ({ allProjects }) => {
	const [projects, setProjects] = useState('');
	const [images, setImages] = useState([]);

	const { t } = useTranslation();

	useEffect(() => {
		const getCoverImage = async () => {
			try {
				const res = await fetch(
					`https://api.unsplash.com/search/photos?client_id=${process.env.GATSBY_PUBLIC_UNSPLASH_TOKEN}&query=technology&page=1&per_page=3`
				);
				const fetchedImages = await res.json();

				setImages(fetchedImages.results);
			} catch (error) {
				// eslint-disable-next-line no-console
				console.warn(error);
			}
		};
		getCoverImage();
	}, []);

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

	return (
		<>
			<StyledRecentProjects>
				{projects ? (
					projects
						.slice(0, 3)
						.map((project, index) => (
							<SingleProject
								key={project.id}
								isMain
								project={project}
								cover={
									images.length ? images[index].urls.regular : DefaultCover
								}
							/>
						))
				) : (
					<div>
						<h3>No recent projects...</h3>
					</div>
				)}
			</StyledRecentProjects>
			<More title={t('main.more')} link={allProjects} justify="flex-end" />
		</>
	);
};

export default RecentProjects;

RecentProjects.defaultProps = {
	allProjects: null,
};

RecentProjects.propTypes = {
	allProjects: PropTypes.string,
};
