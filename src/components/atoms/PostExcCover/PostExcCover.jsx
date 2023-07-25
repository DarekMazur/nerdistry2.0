import * as React from 'react';
import PropTypes from 'prop-types';
import { StyledPostExcCover } from './PostExcCover.styles';

const PostExcCover = ({ imageURL, alt }) => (
	<StyledPostExcCover>
		<img src={imageURL} alt={alt} />
	</StyledPostExcCover>
);

export default PostExcCover;

PostExcCover.defaultProps = {
	alt: '',
};

PostExcCover.propTypes = {
	imageURL: PropTypes.string.isRequired,
	alt: PropTypes.string,
};
