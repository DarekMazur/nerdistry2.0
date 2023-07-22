import * as React from 'react';
import PropTypes from 'prop-types';
import { StyledWrapper } from './Wrapper.styles';
import { StyledSectionTitle } from '../../atoms/SectionTitle/SectionTitle.styles';

function Wrapper({ children, title, isWide }) {
	return (
		<StyledWrapper isWide={isWide}>
			<StyledSectionTitle>{title}</StyledSectionTitle>
			{children}
		</StyledWrapper>
	);
}

Wrapper.defaultProps = {
	isWide: false,
};

Wrapper.propTypes = {
	children: PropTypes.node.isRequired,
	title: PropTypes.string.isRequired,
	isWide: PropTypes.bool,
};

export default Wrapper;
