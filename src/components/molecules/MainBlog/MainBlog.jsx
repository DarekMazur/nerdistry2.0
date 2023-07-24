import * as React from 'react';
import PropTypes, { arrayOf, oneOfType } from 'prop-types';
import SinglePostExcerpt from '../SinglePostExcerpt/SinglePostExcerpt';

const MainBlog = ({ posts }) => (
	<>
		{posts.map((post) => (
			<SinglePostExcerpt key={post.id} post={post} />
		))}
		<p>Read more</p>
	</>
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
