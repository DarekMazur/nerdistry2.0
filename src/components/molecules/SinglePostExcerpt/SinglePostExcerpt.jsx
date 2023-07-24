import * as React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getTextExcerpt } from '../../../utils/helpers/getTextExcerpt';
import { getDateFormat } from '../../../utils/helpers/getDateFormat';
import { StyledSinglePostExcerpt } from './SinglePostExcerpt.styles';

const SinglePostExcerpt = ({ post }) => {
	const isDark = useSelector((state) => state.isDark);
	const publishedDate = new Date(post.attributes.publishedAt);

	return (
		<StyledSinglePostExcerpt isDark={isDark} to="/">
			<div>
				<img
					src={post.attributes.CoverImage.data.attributes.formats.medium.url}
					alt={post.attributes.Title}
				/>
			</div>
			<p>
				<span>posted on</span> {getDateFormat(publishedDate)}
			</p>
			<h4>{post.attributes.Title}</h4>
			<p>
				{post.attributes.Description
					? post.attributes.Description
					: `${getTextExcerpt(post.attributes.Content, 200)}[...]`}
			</p>
			{/* eslint-disable-next-line react/button-has-type */}
			<button>Read more</button>
		</StyledSinglePostExcerpt>
	);
};

export default SinglePostExcerpt;

SinglePostExcerpt.propTypes = {
	post: PropTypes.shape({
		id: PropTypes.number,
		attributes: PropTypes.shape({
			Title: PropTypes.string,
			Description: PropTypes.string,
			Content: PropTypes.string,
			publishedAt: PropTypes.string,
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
