import * as React from 'react';
import PropTypes from 'prop-types';
import defaultAvatar from '../../../assets/images/user-secret-solid.svg';
import { StyledAvatar } from './Avatar.styles';

const Avatar = ({ url, handleHover }) => (
	<StyledAvatar
		src={url}
		alt="User"
		onMouseEnter={handleHover}
		onMouseLeave={handleHover}
	/>
);

export default Avatar;

Avatar.defaultProps = {
	url: defaultAvatar,
	handleHover: null,
};

Avatar.propTypes = {
	url: PropTypes.string,
	handleHover: PropTypes.func,
};
