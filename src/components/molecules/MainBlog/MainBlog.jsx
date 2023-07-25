import * as React from 'react';
import PropTypes, { arrayOf, oneOfType } from 'prop-types';
import SinglePostExcerpt from '../SinglePostExcerpt/SinglePostExcerpt';
import { StyledMainBlog } from './MainBlog.styles';
import More from '../../atoms/More/More';

const MainBlog = ({ posts }) => (
	<StyledMainBlog>
		{posts.map((post) => (
			<SinglePostExcerpt key={post.id} post={post} />
		))}
		<More title="Check all" justify="flex-end" margin="2rem 0 0" />
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
