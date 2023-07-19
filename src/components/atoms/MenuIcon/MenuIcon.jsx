import * as React from 'react';
import PropTypes from 'prop-types';
import MenuIconVector from '../../../assets/icons/bars-solid.svg';

const MenuIcon = ({ handleClick }) => <MenuIconVector onClick={handleClick} />;

export default MenuIcon;

MenuIcon.propTypes = {
	handleClick: PropTypes.func.isRequired,
};
