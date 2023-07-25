import * as React from 'react';
import PropTypes from 'prop-types';
import Arrow from '../../../assets/icons/arrow-solid.svg';
import { StyledMore } from './More.styles';

const More = ({ title, isAbsolute, isHover }) => (
	<StyledMore isAbsolute={isAbsolute} isHover={isHover}>
		<span>{title}</span>
		<Arrow />
	</StyledMore>
);

export default More;

More.defaultProps = {
	title: 'Read more',
	isAbsolute: false,
	isHover: false,
};

More.propTypes = {
	title: PropTypes.string,
	isAbsolute: PropTypes.bool,
	isHover: PropTypes.bool,
};
