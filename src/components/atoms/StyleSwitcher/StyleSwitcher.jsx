import * as React from 'react';
import PropTypes from 'prop-types';
import SunIcon from '../../../assets/icons/sun-regular.svg';
import MoonIcon from '../../../assets/icons/moon-solid.svg';
import { StyledStyleSwitcher } from './StyleSwitcher.styles';

const StylesSwitcher = ({ isDark, handleVersionChange }) => (
	<StyledStyleSwitcher isDark={isDark} onClick={handleVersionChange}>
		<SunIcon />
		<MoonIcon />
	</StyledStyleSwitcher>
);

export default StylesSwitcher;

StylesSwitcher.propTypes = {
	isDark: PropTypes.bool.isRequired,
	handleVersionChange: PropTypes.func.isRequired,
};