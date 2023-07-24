import * as React from 'react';
import PropTypes, { arrayOf, oneOfType } from 'prop-types';

const MainBlog = ({ posts }) => (
	<>
		{posts.map((post) => (
			<React.Fragment key={post.id}>
				<div>
					<div>
						<img
							src={
								post.attributes.CoverImage.data.attributes.formats.medium.url
							}
							alt={post.attributes.Title}
						/>
					</div>
					<p>
						<span>posted on</span> data
					</p>
					<h4>{post.attributes.Title}</h4>
					<p>{post.attributes.Description}</p>
				</div>
			</React.Fragment>
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
			}),
		])
	).isRequired,
};
