import * as React from 'react';
import { useSelector } from 'react-redux';
import Cover from '../../../assets/icons/about.svg';
import { StyledMainAbout } from './MainAbout.styles';
import { about } from '../../../utils/mock';

const MainAbout = () => {
	const isDark = useSelector((state) => state.isDark);

	return (
		<StyledMainAbout isDark={isDark}>
			<Cover />
			<p>{about}</p>
		</StyledMainAbout>
	);
};

export default MainAbout;
