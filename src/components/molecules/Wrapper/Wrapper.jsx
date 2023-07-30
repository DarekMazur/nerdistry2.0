import * as React from 'react';
import PropTypes from 'prop-types';
import { StyledWrapper } from './Wrapper.styles';
import { StyledSectionTitle } from '../../atoms/SectionTitle/SectionTitle.styles';

function Wrapper({ children, title, isWide, isBig }) {
	return (
		<StyledWrapper $wide={isWide}>
			<StyledSectionTitle $big={isBig}>{title}</StyledSectionTitle>
			{children}
		</StyledWrapper>
	);
}

Wrapper.defaultProps = {
	isWide: false,
	isBig: false,
};

Wrapper.propTypes = {
	children: PropTypes.node.isRequired,
	title: PropTypes.string.isRequired,
	isWide: PropTypes.bool,
	isBig: PropTypes.bool,
};

export default Wrapper;
