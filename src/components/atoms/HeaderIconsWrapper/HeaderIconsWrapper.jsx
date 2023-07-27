import * as React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import StyleSwitcher from '../StyleSwitcher/StyleSwitcher';
import { StyledIcon } from '../Icon/Icon.styles';
import MenuIcon from '../MenuIcon/MenuIcon';
import { StyledHeaderIconsWrapper } from './HeaderIconsWrapper.styles';

const HeaderIconsWrapper = ({ handleClick }) => {
	const isDark = useSelector((state) => state.isDark);

	return (
		<StyledHeaderIconsWrapper>
			<StyleSwitcher isDark={isDark} />
			<StyledIcon $dark={isDark} $justify="flex-end">
				<MenuIcon handleClick={handleClick} />
			</StyledIcon>
		</StyledHeaderIconsWrapper>
	);
};

export default HeaderIconsWrapper;

HeaderIconsWrapper.propTypes = {
	handleClick: PropTypes.func.isRequired,
};
