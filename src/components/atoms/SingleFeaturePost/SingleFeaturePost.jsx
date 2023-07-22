import * as React from 'react';
import PropTypes from 'prop-types';
import FeaturedDetails from '../FeaturedDetails/FeaturedDetails';
import { StyledSingleFeaturePost } from './SingleFeaturePost.styles';
import { P } from '../P/P.styles';
import { getReadingTime } from '../../../utils/helpers/getReadingTime';

const SingleFeaturePost = ({ post }) => (
	<StyledSingleFeaturePost
		cover={post.attributes.CoverImage.data.attributes.url}
	>
		<div>
			<FeaturedDetails
				publishedAt={post.attributes.publishedAt}
				categories={post.attributes.categories.data}
			/>
			<h3>{post.attributes.Title}</h3>
			<P>{post.attributes.Description}</P>
			<P isBold>{getReadingTime(post.attributes.Content)} minutes to read</P>
		</div>
	</StyledSingleFeaturePost>
);

export default SingleFeaturePost;

SingleFeaturePost.propTypes = {
	post: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
};
