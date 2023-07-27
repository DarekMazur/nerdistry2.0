import * as React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Link } from 'gatsby';
import Arrow from '../../../assets/icons/arrow-solid.svg';
import { StyledMore } from './More.styles';

const More = ({
	title,
	margin,
	padding,
	justify,
	to,
	isAbsolute,
	isHover,
	isDiv,
}) => {
	const isDark = useSelector((state) => state.isDark);

	return (
		<StyledMore
			$dark={isDark}
			$absolute={isAbsolute}
			$hover={isHover}
			$margin={margin}
			$padding={padding}
			$justify={justify}
		>
			{isDiv ? (
				<div>
					<span>{title}</span>
					<Arrow />
				</div>
			) : (
				<Link to={to}>
					<span>{title}</span>
					<Arrow />
				</Link>
			)}
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
	isDiv: false,
};

More.propTypes = {
	title: PropTypes.string,
	isAbsolute: PropTypes.bool,
	isHover: PropTypes.bool,
	margin: PropTypes.string,
	padding: PropTypes.string,
	justify: PropTypes.string,
	to: PropTypes.string,
	isDiv: PropTypes.bool,
};
