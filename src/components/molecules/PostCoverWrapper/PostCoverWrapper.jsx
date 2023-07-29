import * as React from 'react';
import { useState } from 'react';
import Avatar from '../../atoms/Avatar/Avatar';
import { StyledPostCoverWrapper } from './PostCoverWrapper.styles';
import AuthorPopup from '../AuthorPopup/AuthorPopup';

const PostCoverWrapper = () => {
	const [isHover, setIsHover] = useState(false);
	const handleHover = () => setIsHover((prevState) => !prevState);
	return (
		<StyledPostCoverWrapper>
			<img
				src="https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
				alt="Lorem ipsum"
			/>
			<Avatar
				url="https://thispersondoesnotexist.com/"
				handleHover={handleHover}
			/>
			<AuthorPopup isHover={isHover} />
		</StyledPostCoverWrapper>
	);
};
export default PostCoverWrapper;
