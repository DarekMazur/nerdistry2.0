import * as React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, useStaticQuery } from 'gatsby';
import LinkedinIcon from '../../../assets/icons/linkedin-in.svg';
import TwitterIcon from '../../../assets/icons/twitter.svg';
import GithubIcon from '../../../assets/icons/github.svg';
import FacebookIcon from '../../../assets/icons/facebook-f.svg';
import YouTubeIcon from '../../../assets/icons/youtube.svg';
import DiscordIcon from '../../../assets/icons/discord.svg';
import BitBucketIcon from '../../../assets/icons/bitbucket.svg';
import FlickrIcon from '../../../assets/icons/flickr.svg';
import GitLabIcon from '../../../assets/icons/gitlab.svg';
import SpotifyIcon from '../../../assets/icons/spotify.svg';
import TikTokIcon from '../../../assets/icons/tiktok.svg';
import TwitchIcon from '../../../assets/icons/twitch.svg';
import VimeoIcon from '../../../assets/icons/vimeo-v.svg';
import PatroniteIcon from '../../../assets/icons/patronite.svg';
import LinkIcon from '../../../assets/icons/link-solid.svg';
import { StyledIcon } from '../../atoms/Icon/Icon.styles';
import { StyledFooter } from './Footer.styles';
import Logo from '../../atoms/Logo/Logo';
import { getCurrentYear } from '../../../utils/helpers/getCurrentYear';
import GoToTop from '../../atoms/GoToTop/GoToTop';

const Footer = ({ isDark }) => {
	const menuData = useStaticQuery(graphql`
		query {
			strapiMainMenu {
				MenuElement {
					id
					Name
					url
				}
			}
			strapiFooterMenu {
				FooterMenuElement {
					id
					Name
					url
				}
			}
			strapiSocialMenu {
				url {
					id
					platformName
					socialLink
				}
			}
		}
	`);

	const getSocialIconSvg = (socialPlatform) => {
		if (socialPlatform.toLowerCase().indexOf('linkedin') !== -1) {
			return <LinkedinIcon />;
		}
		if (socialPlatform.toLowerCase().indexOf('github') !== -1) {
			return <GithubIcon />;
		}
		if (socialPlatform.toLowerCase().indexOf('twitter') !== -1) {
			return <TwitterIcon />;
		}
		if (socialPlatform.toLowerCase().indexOf('youtube') !== -1) {
			return <YouTubeIcon />;
		}
		if (socialPlatform.toLowerCase().indexOf('facebook') !== -1) {
			return <FacebookIcon />;
		}
		if (socialPlatform.toLowerCase().indexOf('bitbucket') !== -1) {
			return <BitBucketIcon />;
		}
		if (socialPlatform.toLowerCase().indexOf('discord') !== -1) {
			return <DiscordIcon />;
		}
		if (socialPlatform.toLowerCase().indexOf('flickr') !== -1) {
			return <FlickrIcon />;
		}
		if (socialPlatform.toLowerCase().indexOf('gitlab') !== -1) {
			return <GitLabIcon />;
		}
		if (socialPlatform.toLowerCase().indexOf('patronite') !== -1) {
			return <PatroniteIcon />;
		}
		if (socialPlatform.toLowerCase().indexOf('spotify') !== -1) {
			return <SpotifyIcon />;
		}
		if (socialPlatform.toLowerCase().indexOf('tiktok') !== -1) {
			return <TikTokIcon />;
		}
		if (socialPlatform.toLowerCase().indexOf('twitch') !== -1) {
			return <TwitchIcon />;
		}
		if (socialPlatform.toLowerCase().indexOf('vimeo') !== -1) {
			return <VimeoIcon />;
		}
		return <LinkIcon />;
	};

	const footerMenu =
		menuData.strapiFooterMenu.FooterMenuElement ||
		menuData.strapiMainMenu.MenuElement;

	return (
		<StyledFooter>
			<Link to="/">
				<Logo isFooter />
			</Link>
			<nav>
				<ul>
					{footerMenu.map((menuItem) => (
						<li key={menuItem.id}>
							<a href={menuItem.url}>{menuItem.Name}</a>
						</li>
					))}
				</ul>
			</nav>
			<p>Gacek &copy; {getCurrentYear()}</p>
			<ul>
				{menuData.strapiSocialMenu.url.map((socialMenuItem) => (
					<li key={socialMenuItem.id}>
						<a
							href={socialMenuItem.socialLink}
							target="_blank"
							rel="noreferrer"
						>
							<StyledIcon>
								{getSocialIconSvg(
									socialMenuItem.platformName || socialMenuItem.socialLink
								)}
							</StyledIcon>
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
