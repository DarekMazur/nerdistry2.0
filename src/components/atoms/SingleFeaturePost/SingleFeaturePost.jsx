import * as React from 'react';
import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import SplitType from 'split-type';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Link } from 'gatsby';
import FeaturedDetails from '../FeaturedDetails/FeaturedDetails';
import { StyledSingleFeaturePost } from './SingleFeaturePost.styles';
import { P } from '../P/P.styles';
import { getReadingTime } from '../../../utils/helpers/getReadingTime';
import More from '../More/More';
import { getTextExcerpt } from '../../../utils/helpers/getTextExcerpt';

gsap.registerPlugin(ScrollTrigger);

const SingleFeaturePost = ({ post }) => {
	const [isHover, setIsHover] = useState(false);
	const paragraphRef = useRef(null);
	const handleHover = () => setIsHover((prevState) => !prevState);

	useEffect(() => {
		SplitType.create(paragraphRef.current, { types: 'chars' });

		gsap.fromTo(
			paragraphRef.current.children,
			{
				y: '+=10px%',
				autoAlpha: 0,
			},
			{
				y: 0,
				duration: 0.2,
				stagger: 0.017,
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
		<StyledSingleFeaturePost cover={post.CoverImage.url}>
			<Link to="/" onMouseEnter={handleHover} onMouseLeave={handleHover}>
				<FeaturedDetails
					publishedAt={post.publishedAt}
					categories={post.categories}
				/>
				<h3>{post.Title}</h3>
				<P ref={paragraphRef}>
					{post.Description
						? post.Description
						: `${getTextExcerpt(post.Content, 200)}[...]`}
				</P>
				<P isBold>{getReadingTime(post.Content)} minutes to read</P>
				<More title="Read more" isAbsolute isHover={isHover} />
			</Link>
		</StyledSingleFeaturePost>
	);
};

export default SingleFeaturePost;

SingleFeaturePost.propTypes = {
	post: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
};
