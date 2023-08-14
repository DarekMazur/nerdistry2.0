import * as React from 'react';
import PropTypes from 'prop-types';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { StyledAuthorPopup } from './AuthorPopup.styles';

const AuthorPopup = ({ isHover, name, desc }) => (
	<StyledAuthorPopup $hover={isHover}>
		<h3>{name}</h3>
		<ReactMarkdown>{desc || null}</ReactMarkdown>
	</StyledAuthorPopup>
);

export default AuthorPopup;

AuthorPopup.defaultProps = {
	isHover: false,
	name: null,
	desc: null,
};

AuthorPopup.propTypes = {
	isHover: PropTypes.bool,
	name: PropTypes.string,
	desc: PropTypes.string,
};
