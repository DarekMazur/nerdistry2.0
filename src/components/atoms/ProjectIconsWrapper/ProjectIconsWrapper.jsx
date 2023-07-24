import * as React from 'react';
import { useSelector } from 'react-redux';
import GitHubIcon from '../../../assets/icons/github.svg';
import LinkIcon from '../../../assets/icons/link-solid.svg';
import { StyledProjectIconsWrapper } from './ProjectIconsWrapper.styles';

const ProjectIconsWrapper = () => {
	const isDark = useSelector((state) => state.isDark);

	return (
		<StyledProjectIconsWrapper isDark={isDark}>
			<GitHubIcon />
			<LinkIcon />
		</StyledProjectIconsWrapper>
	);
};

export default ProjectIconsWrapper;
