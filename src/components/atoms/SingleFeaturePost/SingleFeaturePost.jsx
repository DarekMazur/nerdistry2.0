import * as React from 'react';
import PropTypes, { oneOfType } from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import SplitType from 'split-type';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Link } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import slugify from 'slugify';
import FeaturedDetails from '../FeaturedDetails/FeaturedDetails';
import { StyledSingleFeaturePost } from './SingleFeaturePost.styles';
import { P } from '../P/P.styles';
import { getReadingTime } from '../../../utils/helpers/getReadingTime';
import More from '../More/More';
import { getTextExcerpt } from '../../../utils/helpers/getTextExcerpt';
import DefaultCover from '../../../assets/images/defaultPostCover.jpg';

gsap.registerPlugin(ScrollTrigger);

const SingleFeaturePost = ({ post }) => {
	const [isHover, setIsHover] = useState(false);
	const paragraphRef = useRef(null);
	const handleHover = () => setIsHover((prevState) => !prevState);

	const { t } = useTranslation();

	const estimation = getReadingTime(post.Content);

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
		<StyledSingleFeaturePost
			$cover={post.CoverImage ? post.CoverImage.url : DefaultCover}
		>
			<Link
				to={`/blog/${slugify(post.Title)}`}
				onMouseEnter={handleHover}
				onMouseLeave={handleHover}
			>
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
				<P $isBold>{t('blog.post.readingTime', { estimation })}</P>
				<More
					tag="div"
					title={t('blog.post.more')}
					isAbsolute
					isHover={isHover}
					color="white"
				/>
			</Link>
		</StyledSingleFeaturePost>
	);
};

export default SingleFeaturePost;

SingleFeaturePost.propTypes = {
	post: PropTypes.shape({
		CoverImage: PropTypes.shape({
			url: PropTypes.string,
		}),
		publishedAt: PropTypes.string,
		categories: PropTypes.arrayOf(oneOfType([PropTypes.object])),
		Title: PropTypes.string,
		Description: PropTypes.string,
		Content: PropTypes.string,
	}).isRequired,
};
