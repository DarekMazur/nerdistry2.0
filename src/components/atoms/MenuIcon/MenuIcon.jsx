import * as React from 'react';
import PropTypes from 'prop-types';
import MenuIconVector from '../../../assets/icons/bars-solid.svg';
import { StyledMenuIcon } from './MenuIcon.styles';

const MenuIcon = ({ handleClick }) => (
	<StyledMenuIcon>
		<MenuIconVector onClick={handleClick} />
	</StyledMenuIcon>
);

export default MenuIcon;

MenuIcon.propTypes = {
	handleClick: PropTypes.func.isRequired,
};
