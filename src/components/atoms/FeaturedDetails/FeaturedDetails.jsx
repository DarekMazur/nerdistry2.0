import * as React from 'react';
import PropTypes from 'prop-types';
import { getDateFormat } from '../../../utils/helpers/getDateFormat';
import { StyledFeaturedDetails } from './FeturedDetails.styles';

const FeaturedDetails = ({ publishedAt, categories }) => {
	const publishedDate = new Date(publishedAt);

	return (
		<StyledFeaturedDetails>
			<span>
				{getDateFormat(publishedDate)}
				{categories.map((category) => `, ${category.Name}`)}
			</span>
		</StyledFeaturedDetails>
	);
};

export default FeaturedDetails;

FeaturedDetails.propTypes = {
	publishedAt: PropTypes.string.isRequired,
	categories: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object]))
		.isRequired,
};
