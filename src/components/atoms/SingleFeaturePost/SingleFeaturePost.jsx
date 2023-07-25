import * as React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import FeaturedDetails from '../FeaturedDetails/FeaturedDetails';
import { StyledSingleFeaturePost } from './SingleFeaturePost.styles';
import { P } from '../P/P.styles';
import { getReadingTime } from '../../../utils/helpers/getReadingTime';
import More from '../More/More';

const SingleFeaturePost = ({ post }) => {
	const [isHover, setIsHover] = useState(false);
	const handleHover = () => setIsHover((prevState) => !prevState);

	return (
		<StyledSingleFeaturePost
			cover={post.attributes.CoverImage.data.attributes.url}
		>
			<div onMouseEnter={handleHover} onMouseLeave={handleHover}>
				<FeaturedDetails
					publishedAt={post.attributes.publishedAt}
					categories={post.attributes.categories.data}
				/>
				<h3>{post.attributes.Title}</h3>
				<P>{post.attributes.Description}</P>
				<P isBold>{getReadingTime(post.attributes.Content)} minutes to read</P>
				<More title="Read more" isAbsolute isHover={isHover} />
			</div>
		</StyledSingleFeaturePost>
	);
};

export default SingleFeaturePost;

SingleFeaturePost.propTypes = {
	post: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
};
