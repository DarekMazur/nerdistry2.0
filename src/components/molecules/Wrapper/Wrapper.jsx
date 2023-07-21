import * as React from 'react';
import PropTypes from 'prop-types';
import { StyledWrapper } from './Wrapper.styles';
import { StyledSectionTitle } from '../../atoms/SectionTitle/SectionTitle.styles';

function Wrapper({ children, title }) {
	return (
		<StyledWrapper>
			<StyledSectionTitle>{title}</StyledSectionTitle>
			{children}
		</StyledWrapper>
	);
}

Wrapper.propTypes = {
	children: PropTypes.node.isRequired,
	title: PropTypes.string.isRequired,
};

export default Wrapper;
