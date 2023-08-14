import * as React from 'react';
import PropTypes, { oneOfType } from 'prop-types';
import { Link } from 'gatsby';
import slugify from 'slugify';
import { useSelector } from 'react-redux';
import { StyledWrapper } from './Wrapper.styles';
import { StyledSectionTitle } from '../../atoms/SectionTitle/SectionTitle.styles';

const Wrapper = ({ children, title, titleArray, isWide, isBig }) => {
	const isDark = useSelector((state) => state.isDark);

	return (
		<StyledWrapper $wide={isWide}>
			<StyledSectionTitle $big={isBig} $dark={isDark}>
				{title ||
					titleArray.map((titleElement) => (
						<Link key={titleElement} to={`/category/${slugify(titleElement)}`}>
							{titleElement}
						</Link>
					))}
			</StyledSectionTitle>
			{children}
		</StyledWrapper>
	);
};

Wrapper.defaultProps = {
	title: null,
	titleArray: null,
	isWide: false,
	isBig: false,
};

Wrapper.propTypes = {
	children: PropTypes.node.isRequired,
	title: PropTypes.string,
	titleArray: PropTypes.arrayOf(oneOfType([PropTypes.string])),
	isWide: PropTypes.bool,
	isBig: PropTypes.bool,
};

export default Wrapper;
