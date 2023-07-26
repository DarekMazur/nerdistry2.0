import * as React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import ProjectIconsWrapper from '../../atoms/ProjectIconsWrapper/ProjectIconsWrapper';
import { StyledSingleProject } from './SingleProject.styles';

const SingleProject = ({ isMain = false, project, cover }) => {
	const isDark = useSelector((state) => state.isDark);

	return (
		<StyledSingleProject isMain={isMain} isDark={isDark}>
			<h3>{project.name}</h3>
			<div>
				<img src={cover} alt={project.name} />
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
	isMain: PropTypes.bool.isRequired,
	project: PropTypes.shape({
		name: PropTypes.string,
		html_url: PropTypes.string,
		homepage: PropTypes.string,
	}).isRequired,
	cover: PropTypes.string.isRequired,
};
