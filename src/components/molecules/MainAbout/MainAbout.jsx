import * as React from 'react';
import { useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import SplitType from 'split-type';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Cover from '../../../assets/icons/about.svg';
import { StyledMainAbout } from './MainAbout.styles';
import { about } from '../../../utils/mock';

gsap.registerPlugin(ScrollTrigger);

const MainAbout = () => {
	const isDark = useSelector((state) => state.isDark);
	const paragraphRef = useRef(null);

	useEffect(() => {
		SplitType.create(paragraphRef.current, { types: 'chars' });

		gsap.fromTo(
			paragraphRef.current.children,
			{
				y: '+=20px%',
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
		<StyledMainAbout isDark={isDark}>
			<Cover />
			<p ref={paragraphRef}>{about}</p>
		</StyledMainAbout>
	);
};

export default MainAbout;
