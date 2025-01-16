import * as React from 'react';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Avatar from '../../atoms/Avatar/Avatar';
import { StyledPostCoverWrapper } from './PostCoverWrapper.styles';
import AuthorPopup from '../AuthorPopup/AuthorPopup';
import defaultCover from '../../../assets/images/defaultPostCover.jpg';

const PostCoverWrapper = ({ coverUrl, postTitle, userID }) => {
	const [isHover, setIsHover] = useState(false);
	const [user, setUser] = useState([]);
	const handleHover = () => setIsHover((prevState) => !prevState);

	useEffect(() => {
		const getUserData = async () => {
			const res = await fetch(
				`${process.env.GATSBY_API_URL}/users?filters[documentId][$eq]=${userID}&populate=*`
			);
			const userData = await res.json();
			setUser(userData);
		};
		getUserData();
	}, []);

	return (
		<StyledPostCoverWrapper>
			<img src={coverUrl || defaultCover} alt={postTitle || ''} />
			{user.length ? (
				<>
					<Avatar url={user[0].Avatar.url} handleHover={handleHover} />
					<AuthorPopup
						isHover={isHover}
						name={user[0].username}
						desc={user[0].Bio}
					/>
				</>
			) : null}
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
	userID: PropTypes.string.isRequired,
};
