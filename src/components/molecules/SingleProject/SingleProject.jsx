import * as React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import ProjectIconsWrapper from '../../atoms/ProjectIconsWrapper/ProjectIconsWrapper';
import { StyledSingleProject } from './SingleProject.styles';

const SingleProject = ({ project, cover }) => {
	const isDark = useSelector((state) => state.isDark);

	return (
		<StyledSingleProject $dark={isDark}>
			<h3>{project.name}</h3>
			<div>
				<a href={project.html_url} target="_blank" rel="noreferrer">
					<img src={cover} alt={project.name} />
				</a>
			</div>
			<ProjectIconsWrapper
				ghLink={project.html_url}
				appLink={project.homepage}
			/>
		</StyledSingleProject>
	);
};

export default SingleProject;

SingleProject.propTypes = {
	project: PropTypes.shape({
		name: PropTypes.string,
		html_url: PropTypes.string,
		homepage: PropTypes.string,
	}).isRequired,
	cover: PropTypes.string.isRequired,
};
