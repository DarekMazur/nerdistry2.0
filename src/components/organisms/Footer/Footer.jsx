import * as React from 'react';
import PropTypes from 'prop-types';
import LinkedinIcon from '../../../assets/icons/linkedin-in.svg';
import TwitterIcon from '../../../assets/icons/twitter.svg';
import GithubIcon from '../../../assets/icons/github.svg';
import { StyledIcon } from '../../atoms/Icon/Icon.styles';
import { StyledFooter } from './Footer.styles';
import Logo from '../../atoms/Logo/Logo';
import { getCurrentYear } from '../../../utils/helpers/getCurrentYear';
import GoToTop from '../../atoms/GoToTop/GoToTop';
import { footerMenu, socialMedia } from '../../../utils/mock';

const Footer = ({ isDark }) => {
	const getSocialIconSvg = (socialPlatform) => {
		switch (socialPlatform) {
			case 'LinkedinIcon':
				return <LinkedinIcon />;
			case 'GithubIcon':
				return <GithubIcon />;
			case 'TwitterIcon':
				return <TwitterIcon />;
			default:
				return null;
		}
	};

	return (
		<StyledFooter>
			<Logo isFooter />
			<nav>
				<ul>
					{footerMenu.map((menuItem) => (
						<li>
							<a href={menuItem.url}>{menuItem.name}</a>
						</li>
					))}
				</ul>
			</nav>
			<p>Gacek &copy; {getCurrentYear()}</p>
			<ul>
				{socialMedia.map((socialMenuItem) => (
					<li>
						<a href={socialMenuItem.url} target="_blank" rel="noreferrer">
							<StyledIcon>{getSocialIconSvg(socialMenuItem.icon)}</StyledIcon>
						</a>
					</li>
				))}
			</ul>
			<GoToTop isDark={isDark} />
		</StyledFooter>
	);
};

export default Footer;

Footer.defaultProps = {
	isDark: false,
};

Footer.propTypes = {
	isDark: PropTypes.bool,
};
