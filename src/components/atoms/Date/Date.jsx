import * as React from 'react';
import PropTypes from 'prop-types';
import { StyledDate } from './Date.styles';

const Date = ({ date, size }) => (
	<StyledDate $size={size}>
		<span>Posted on</span> {date}
	</StyledDate>
);

export default Date;

Date.defaultProps = {
	size: null,
};

Date.propTypes = {
	date: PropTypes.string.isRequired,
	size: PropTypes.string,
};
