import * as React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import SunIcon from '../../../assets/icons/sun-regular.svg';
import MoonIcon from '../../../assets/icons/moon-solid.svg';
import { StyledStyleSwitcher } from './StyleSwitcher.styles';
import { switchColorVersion } from '../../../store';

const StylesSwitcher = ({ isDark }) => {
	const dispatch = useDispatch();
	const handleVersionChange = () => dispatch(switchColorVersion({ isDark }));

	return (
		<StyledStyleSwitcher isDark={isDark} onClick={handleVersionChange}>
			<SunIcon />
			<MoonIcon />
		</StyledStyleSwitcher>
	);
};
export default StylesSwitcher;

StylesSwitcher.propTypes = {
	isDark: PropTypes.bool.isRequired,
};
