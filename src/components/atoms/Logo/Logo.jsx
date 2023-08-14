import * as React from 'react';
import PropTypes from 'prop-types';
import LogoIcon from '../../../assets/icons/Logo.svg';
import { StyledLogo } from './Logo.styles';

const Logo = ({ isFooter }) => (
	<StyledLogo $footer={isFooter}>
		<LogoIcon />
	</StyledLogo>
);

export default Logo;

Logo.defaultProps = {
	isFooter: false,
};

Logo.propTypes = {
	isFooter: PropTypes.bool,
};
