import * as React from 'react';
import PropTypes from 'prop-types';
import { StyledDate } from './Date.styles';

const Date = ({ date }) => (
	<StyledDate>
		<span>Posted on</span> {date}
	</StyledDate>
);

export default Date;

Date.propTypes = {
	date: PropTypes.string.isRequired,
};
