import * as React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import SplitType from 'split-type';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { getTextExcerpt } from '../../../utils/helpers/getTextExcerpt';
import { getDateFormat } from '../../../utils/helpers/getDateFormat';
import { StyledSinglePostExcerpt } from './SinglePostExcerpt.styles';
import PostExcCover from '../../atoms/PostExcCover/PostExcCover';
import More from '../../atoms/More/More';
import { P } from '../../atoms/P/P.styles';
import { getReadingTime } from '../../../utils/helpers/getReadingTime';

gsap.registerPlugin(ScrollTrigger);

const SinglePostExcerpt = ({ post }) => {
	const isDark = useSelector((state) => state.isDark);
	const [isHover, setIsHover] = useState(false);
	const publishedDate = new Date(post.publishedAt);
	const paragraphRef = useRef(null);

	const handleHover = () => setIsHover((prevState) => !prevState);

	useEffect(() => {
		SplitType.create(paragraphRef.current, { types: 'chars' });

		gsap.fromTo(
			paragraphRef.current.children,
			{
				y: '+=10px',
				autoAlpha: 0,
			},
			{
				y: 0,
				duration: 0.2,
				stagger: 0.025,
				delay: 0.1,
				autoAlpha: 1,
				scrollTrigger: {
					trigger: paragraphRef.current,
					start: 'top bottom-=100px',
				},
			}
		);
	}, []);

	return (
		<StyledSinglePostExcerpt
			$dark={isDark}
			to="/"
			onMouseEnter={handleHover}
			onMouseLeave={handleHover}
		>
			<PostExcCover imageURL={post.CoverImage.url} alt={post.Title} />
			<p>
				<span>posted on</span> {getDateFormat(publishedDate)}
			</p>
			<h4>{post.Title}</h4>
			<P ref={paragraphRef}>
				{post.Description
					? post.Description
					: `${getTextExcerpt(post.Content, 200)}[...]`}
			</P>
			<P>{getReadingTime(post.Content)} minutes to read</P>
			<More tag="div" title="Read more" isAbsolute isHover={isHover} />
		</StyledSinglePostExcerpt>
	);
};

export default SinglePostExcerpt;

SinglePostExcerpt.propTypes = {
	post: PropTypes.shape({
		id: PropTypes.string,
		Title: PropTypes.string,
		Description: PropTypes.string,
		Content: PropTypes.string,
		publishedAt: PropTypes.string,
		CoverImage: PropTypes.shape({
			url: PropTypes.string,
		}),
	}).isRequired,
};
