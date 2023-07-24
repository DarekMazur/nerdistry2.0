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
		<StyledSinglePostExcerpt isDark={isDark}>
			<img
				src={post.attributes.CoverImage.data.attributes.formats.medium.url}
				alt={post.attributes.Title}
			/>
			<p>
				<span>posted on</span> {getDateFormat(publishedDate)}
			</p>
			<h4>{post.attributes.Title}</h4>
			<p>
				{post.attributes.Description
					? post.attributes.Description
					: `${getTextExcerpt(post.attributes.Content, 200)}[...]`}
			</p>
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
