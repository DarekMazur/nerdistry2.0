import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Prism from 'prismjs';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { StyledPostContent } from './PostContent.styles';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-typescript';

const PostContent = ({ content }) => {
	useEffect(() => {
		Prism.highlightAll();
	}, []);

	return (
		<StyledPostContent>
			<ReactMarkdown>{content}</ReactMarkdown>
		</StyledPostContent>
	);
};

export default PostContent;

PostContent.defaultProps = {
	content: 'Something went wrong...',
};

PostContent.propTypes = {
	content: PropTypes.string,
};
