import * as React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Avatar from '../../atoms/Avatar/Avatar';
import { StyledPostCoverWrapper } from './PostCoverWrapper.styles';
import AuthorPopup from '../AuthorPopup/AuthorPopup';
import defaultCover from '../../../assets/images/defaultPostCover.jpg';

const PostCoverWrapper = ({ coverUrl, postTitle }) => {
	const [isHover, setIsHover] = useState(false);
	const handleHover = () => setIsHover((prevState) => !prevState);
	return (
		<StyledPostCoverWrapper>
			<img src={coverUrl || defaultCover} alt={postTitle || ''} />
			<Avatar
				url="https://thispersondoesnotexist.com/"
				handleHover={handleHover}
			/>
			<AuthorPopup isHover={isHover} />
		</StyledPostCoverWrapper>
	);
};
export default PostCoverWrapper;

PostCoverWrapper.defaultProps = {
	coverUrl: null,
	postTitle: null,
};

PostCoverWrapper.propTypes = {
	coverUrl: PropTypes.string,
	postTitle: PropTypes.string,
};
