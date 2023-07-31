import * as React from 'react';
import PropTypes, { oneOfType } from 'prop-types';
import { StyledTechList } from '../../atoms/TechList/TechList.styles';
import { getDateFormat } from '../../../utils/helpers/getDateFormat';
import { StyledProject } from './Project.styles';

const Project = ({ projectData, image, techList, index }) => {
	const formattedDate = (date) => new Date(date);

	return (
		<StyledProject>
			<h3>{projectData.name}</h3>
			<img src={image} alt={projectData.name} />
			<p>
				Created at: {getDateFormat(formattedDate(projectData.created_at))} (last
				update: {getDateFormat(formattedDate(projectData.updated_at))})
			</p>
			<p>{projectData.description}</p>
			<StyledTechList>
				{techList[index]
					? Object.keys(techList[index]).map((techName) => (
							<span key={techName}>{techName}</span>
					  ))
					: null}
			</StyledTechList>
			{projectData.homepage ? (
				<a href={projectData.homepage} target="_blank" rel="noreferrer">
					Link
				</a>
			) : null}
		</StyledProject>
	);
};

export default Project;

Project.defaultProps = {
	image: null,
	techList: null,
};

Project.propTypes = {
	projectData: PropTypes.shape({
		name: PropTypes.string,
		created_at: PropTypes.string,
		updated_at: PropTypes.string,
		description: PropTypes.string,
		homepage: PropTypes.string,
	}).isRequired,
	image: PropTypes.string,
	techList: PropTypes.arrayOf(oneOfType([PropTypes.object])),
	index: PropTypes.number.isRequired,
};
