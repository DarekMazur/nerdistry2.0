import * as React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Link } from 'gatsby';
import Arrow from '../../../assets/icons/arrow-solid.svg';
import { StyledMore } from './More.styles';

const More = ({ title, margin, padding, justify, to, isAbsolute, isHover }) => {
	const isDark = useSelector((state) => state.isDark);

	return (
		<StyledMore
			isDark={isDark}
			isAbsolute={isAbsolute}
			isHover={isHover}
			margin={margin}
			padding={padding}
			justify={justify}
		>
			<Link to={to}>
				<span>{title}</span>
				<Arrow />
			</Link>
		</StyledMore>
	);
};

export default More;

More.defaultProps = {
	title: 'Read more',
	isAbsolute: false,
	isHover: false,
	margin: 'unset',
	padding: 'unset',
	justify: 'center',
	to: '/',
};

More.propTypes = {
	title: PropTypes.string,
	isAbsolute: PropTypes.bool,
	isHover: PropTypes.bool,
	margin: PropTypes.string,
	padding: PropTypes.string,
	justify: PropTypes.string,
	to: PropTypes.string,
};
