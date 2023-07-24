import * as React from 'react';
import PropTypes from 'prop-types';

const SinglePostExcerpt = ({ post }) => (
	<div>
		<div>
			<img
				src={post.attributes.CoverImage.data.attributes.formats.medium.url}
				alt={post.attributes.Title}
			/>
		</div>
		<p>
			<span>posted on</span> data
		</p>
		<h4>{post.attributes.Title}</h4>
		<p>{post.attributes.Description}</p>
	</div>
);

export default SinglePostExcerpt;

SinglePostExcerpt.propTypes = {
	post: PropTypes.shape({
		id: PropTypes.number,
		attributes: PropTypes.shape({
			Title: PropTypes.string,
			Description: PropTypes.string,
			CoverImage: PropTypes.shape({
				data: {
					attributes: {
						format: {
							medium: {
								url: PropTypes.string,
							},
						},
					},
				},
			}),
		}),
	}).isRequired,
};
