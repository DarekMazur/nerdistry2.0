import * as React from 'react';
import PropTypes, { arrayOf, oneOfType } from 'prop-types';
import SinglePostExcerpt from '../SinglePostExcerpt/SinglePostExcerpt';
import { StyledMainBlog } from './MainBlog.styles';

const MainBlog = ({ posts }) => (
	<StyledMainBlog>
		{posts.map((post) => (
			<SinglePostExcerpt key={post.id} post={post} />
		))}
		<p>Read more</p>
	</StyledMainBlog>
);

export default MainBlog;

MainBlog.propTypes = {
	posts: arrayOf(
		oneOfType([
			PropTypes.shape({
				id: PropTypes.number,
			}),
		])
	).isRequired,
};
