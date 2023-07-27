import * as React from 'react';
import PropTypes from 'prop-types';
import SingleFeaturePost from '../../atoms/SingleFeaturePost/SingleFeaturePost';

const FeaturedPosts = ({ posts }) => (
	<>
		{posts.map((post) => (
			<SingleFeaturePost key={post.node.id} post={post.node} />
		))}
	</>
);

export default FeaturedPosts;

FeaturedPosts.propTypes = {
	posts: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string])).isRequired,
};
