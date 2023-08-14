import * as React from 'react';
import PropTypes from 'prop-types';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { StyledPostContent } from './PostContent.styles';

const PostContent = ({ content }) => (
	<StyledPostContent>
		<ReactMarkdown>{content}</ReactMarkdown>
	</StyledPostContent>
);

export default PostContent;

PostContent.defaultProps = {
	content: 'Something went wrong...',
};

PostContent.propTypes = {
	content: PropTypes.string,
};
