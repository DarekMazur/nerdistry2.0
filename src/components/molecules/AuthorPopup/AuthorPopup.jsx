import * as React from 'react';
import PropTypes from 'prop-types';
import { StyledAuthorPopup } from './AuthorPopup.styles';

const AuthorPopup = ({ isHover }) => (
	<StyledAuthorPopup $hover={isHover}>
		<h3>User</h3>
		<p>
			Lorem ipsum dolor sit amet consectetur. Eget ipsum neque at quam nullam
			mattis consectetur pharetra dolor. Amet mauris ultrices id cursus senectus
			vitae ac ac. Feugiat amet tincidunt nec malesuada lobortis nec. Feugiat
			purus mauris netus scelerisque ut ac sit.
		</p>
	</StyledAuthorPopup>
);

export default AuthorPopup;

AuthorPopup.defaultProps = {
	isHover: false,
};

AuthorPopup.propTypes = {
	isHover: PropTypes.bool,
};
