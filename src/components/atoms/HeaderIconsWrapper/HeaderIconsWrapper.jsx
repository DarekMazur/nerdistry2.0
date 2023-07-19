import * as React from 'react';
import PropTypes from 'prop-types';
import StyleSwitcher from '../StyleSwitcher/StyleSwitcher';
import { StyledIcon } from '../Icon/Icon.styles';
import MenuIcon from '../MenuIcon/MenuIcon';
import { StyledHeaderIconsWrapper } from './HeaderIconsWrapper.styles';

const HeaderIconsWrapper = ({ isDark, handleClick }) => (
	<StyledHeaderIconsWrapper>
		<StyleSwitcher isDark={isDark} />
		<StyledIcon isDark={isDark} justify="flex-end">
			<MenuIcon handleClick={handleClick} />
		</StyledIcon>
	</StyledHeaderIconsWrapper>
);

export default HeaderIconsWrapper;

HeaderIconsWrapper.defaultProps = {
	isDark: false,
};

HeaderIconsWrapper.propTypes = {
	isDark: PropTypes.bool,
	handleClick: PropTypes.func.isRequired,
};
