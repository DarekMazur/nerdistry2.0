import * as React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { getTextExcerpt } from '../../../utils/helpers/getTextExcerpt';
import { getDateFormat } from '../../../utils/helpers/getDateFormat';
import { StyledSinglePostExcerpt } from './SinglePostExcerpt.styles';
import PostExcCover from '../../atoms/PostExcCover/PostExcCover';
import More from '../../atoms/More/More';

const SinglePostExcerpt = ({ post }) => {
	const isDark = useSelector((state) => state.isDark);
	const [isHover, setIsHover] = useState(false);
	const publishedDate = new Date(post.attributes.publishedAt);

	const handleHover = () => setIsHover((prevState) => !prevState);

	return (
		<StyledSinglePostExcerpt
			isDark={isDark}
			to="/"
			onMouseEnter={handleHover}
			onMouseLeave={handleHover}
		>
			<PostExcCover
				imageURL={post.attributes.CoverImage.data.attributes.formats.medium.url}
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
			{/* eslint-disable-next-line react/button-has-type */}
			<More title="Read more" isAbsolute isHover={isHover} />
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
