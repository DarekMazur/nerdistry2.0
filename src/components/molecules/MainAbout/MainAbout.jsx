import * as React from 'react';
import { useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import SplitType from 'split-type';
import { gsap } from 'gsap';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import PropTypes from 'prop-types';
import { AboutDefaultCover, StyledMainAbout } from './MainAbout.styles';
import cover from '../../../assets/images/cover.png';

gsap.registerPlugin(ScrollTrigger);

const MainAbout = ({ content }) => {
	const isDark = useSelector((state) => state.isDark);
	const paragraphRef = useRef(null);

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
				duration: 0.12,
				stagger: 0.009,
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
		<StyledMainAbout $dark={isDark}>
			{content.AboutCover?.url ? (
				<img src={content.AboutCover.url} alt="" />
			) : null}
			<p ref={paragraphRef}>
				<ReactMarkdown>{content.AboutContent}</ReactMarkdown>
			</p>
			<AboutDefaultCover src={cover} />
		</StyledMainAbout>
	);
};

export default MainAbout;

MainAbout.propTypes = {
	content: PropTypes.shape({
		AboutContent: PropTypes.string,
		AboutCover: PropTypes.shape({
			url: PropTypes.string,
		}),
	}).isRequired,
};
