import * as React from 'react';
import PropTypes from 'prop-types';
import SunIcon from '../../../assets/icons/sun-regular.svg';
import MoonIcon from '../../../assets/icons/moon-solid.svg';
import { StyledStyleSwitcher } from './StyleSwitcher.styles';

const StylesSwitcher = ({ isDark }) => (
	<StyledStyleSwitcher isDark={isDark}>
		<SunIcon />
		<MoonIcon />
	</StyledStyleSwitcher>
);

export default StylesSwitcher;

StylesSwitcher.propTypes = {
	isDark: PropTypes.bool.isRequired,
};
