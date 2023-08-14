import * as React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Arrow from '../../../assets/icons/arrow-solid.svg';
import { StyledMore } from './More.styles';
import { Wrapper } from './Wrapper.styles';

const More = ({
	title,
	margin,
	padding,
	justify,
	link,
	isAbsolute,
	isHover,
	color,
	tag: Tag,
}) => {
	const isDark = useSelector((state) => state.isDark);

	return (
		<div>
			<Wrapper
				$dark={isDark}
				$absolute={isAbsolute}
				$hover={isHover}
				$margin={margin}
				$padding={padding}
				$justify={justify}
				$color={color}
			>
				<StyledMore $dark={isDark} as={Tag} to={link}>
					<span>{title}</span>
					<Arrow />
				</StyledMore>
			</Wrapper>
		</div>
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
	link: '/',
	tag: null,
	color: null,
};

More.propTypes = {
	title: PropTypes.string,
	isAbsolute: PropTypes.bool,
	isHover: PropTypes.bool,
	margin: PropTypes.string,
	padding: PropTypes.string,
	justify: PropTypes.string,
	link: PropTypes.string,
	tag: PropTypes.string,
	color: PropTypes.string,
};
