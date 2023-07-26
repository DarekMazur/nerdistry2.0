import * as React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import GitHubIcon from '../../../assets/icons/github.svg';
import LinkIcon from '../../../assets/icons/link-solid.svg';
import { StyledProjectIconsWrapper } from './ProjectIconsWrapper.styles';

const ProjectIconsWrapper = ({ ghLink, appLink }) => {
	const isDark = useSelector((state) => state.isDark);

	return (
		<StyledProjectIconsWrapper isDark={isDark}>
			<a href={ghLink} target="_blank" rel="noreferrer">
				<GitHubIcon />
			</a>
			{appLink ? (
				<a href={appLink} target="_blank" rel="noreferrer">
					<LinkIcon />
				</a>
			) : null}
		</StyledProjectIconsWrapper>
	);
};

export default ProjectIconsWrapper;

ProjectIconsWrapper.defaultProps = {
	appLink: null,
};

ProjectIconsWrapper.propTypes = {
	ghLink: PropTypes.string.isRequired,
	appLink: PropTypes.string,
};
