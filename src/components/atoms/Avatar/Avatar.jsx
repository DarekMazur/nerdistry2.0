import * as React from 'react';
import PropTypes from 'prop-types';
import defaultAvatar from '../../../assets/images/user-secret-solid.svg';
import { StyledAvatar } from './Avatar.styles';

const Avatar = ({ url }) => <StyledAvatar src={url} alt="User" />;

export default Avatar;

Avatar.defaultProps = {
	url: defaultAvatar,
};

Avatar.propTypes = {
	url: PropTypes.string,
};
