import * as React from 'react';
import SunIcon from '../../../assets/icons/sun-regular.svg';
import MoonIcon from '../../../assets/icons/moon-solid.svg';
import { StyledStyleSwitcher } from './StyleSwitcher.styles';

// eslint-disable-next-line react/prop-types
const StylesSwitcher = ({ isDark }) => (
	<StyledStyleSwitcher isDark={isDark}>
		<SunIcon />
		<MoonIcon />
	</StyledStyleSwitcher>
);

export default StylesSwitcher;
