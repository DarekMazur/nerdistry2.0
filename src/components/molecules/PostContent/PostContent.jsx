import * as React from 'react';
import PropTypes from 'prop-types';
import { StyledPostContent } from './PostContent.styles';

const PostContent = ({ content }) => (
	<StyledPostContent>{content}</StyledPostContent>
);

export default PostContent;

PostContent.defaultProps = {
	content: 'Something went wrong...',
};

PostContent.propTypes = {
	content: PropTypes.string,
};
