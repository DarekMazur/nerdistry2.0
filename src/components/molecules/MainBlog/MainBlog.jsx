import * as React from 'react';
import PropTypes, { arrayOf, oneOfType } from 'prop-types';
import SinglePostExcerpt from '../SinglePostExcerpt/SinglePostExcerpt';
import { StyledMainBlog } from './MainBlog.styles';
import More from '../../atoms/More/More';

const MainBlog = ({ posts, allPost }) => (
	<>
		<StyledMainBlog>
			{posts.map((post) => (
				<SinglePostExcerpt
					key={post.node.id}
					post={post.node}
					postsLength={posts.length}
				/>
			))}
		</StyledMainBlog>
		<More
			title="Check all"
			justify="flex-end"
			margin="2rem 0 0"
			link={allPost}
		/>
	</>
);

export default MainBlog;

MainBlog.defaultProps = {
	allPost: null,
};

MainBlog.propTypes = {
	posts: arrayOf(
		oneOfType([
			PropTypes.shape({
				id: PropTypes.number,
			}),
		])
	).isRequired,
	allPost: PropTypes.string,
};
