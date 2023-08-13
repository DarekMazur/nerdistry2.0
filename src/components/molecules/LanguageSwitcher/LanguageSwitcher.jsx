import * as React from 'react';
import { gsap } from 'gsap';
import { Link, useI18next } from 'gatsby-plugin-react-i18next';
import { StyledLanguageSwitcher } from './LanguageSwitcher.styles';
import { StyledLanguageSwitcherItem } from '../../atoms/LanguageSwitcherItem/LanguageSwitcherItem.styles';
import en from '../../../assets/flags/gb.svg';
import pl from '../../../assets/flags/pl.svg';

const LanguageSwitcher = () => {
	const { languages, originalPath, i18n } = useI18next();
	const langRef = React.useRef();
	const hoverRef = React.useRef();
	const flags = {
		en,
		pl,
	};

	const tl = gsap.timeline({ paused: true });

	React.useEffect(() => {
		const animation = tl.fromTo(
			langRef.current.children,
			{
				autoAlpha: 0,
				y: -25,
			},
			{
				autoAlpha: 1,
				y: 0,
				duration: 0.5,
				stagger: 0.3,
				delay: 0.1,
			}
		);
		hoverRef.current.addEventListener('mouseenter', () => animation.play());
		hoverRef.current.addEventListener('mouseleave', () => animation.reverse());
	}, []);

	return (
		<StyledLanguageSwitcher ref={hoverRef}>
			<li>
				<img
					src={
						flags[
							Object.keys(flags).find((key) => key === i18n.resolvedLanguage)
						]
					}
					alt={i18n.resolvedLanguage}
				/>
				<ul ref={langRef}>
					{languages.map((lng) => (
						<StyledLanguageSwitcherItem key={lng}>
							<Link to={originalPath} language={lng}>
								<img
									src={flags[Object.keys(flags).find((key) => key === lng)]}
									alt={lng}
								/>
							</Link>
						</StyledLanguageSwitcherItem>
					))}
				</ul>
			</li>
		</StyledLanguageSwitcher>
	);
};

export default LanguageSwitcher;
