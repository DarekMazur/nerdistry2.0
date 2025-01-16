import * as React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import LinkedinIcon from '../../../assets/icons/linkedin-in.svg';
import GithubIcon from '../../../assets/icons/github.svg';
import TwitterIcon from '../../../assets/icons/twitter.svg';
import YouTubeIcon from '../../../assets/icons/youtube.svg';
import FacebookIcon from '../../../assets/icons/facebook-f.svg';
import BitBucketIcon from '../../../assets/icons/bitbucket.svg';
import DiscordIcon from '../../../assets/icons/discord.svg';
import FlickrIcon from '../../../assets/icons/flickr.svg';
import GitLabIcon from '../../../assets/icons/gitlab.svg';
import PatroniteIcon from '../../../assets/icons/patronite.svg';
import SpotifyIcon from '../../../assets/icons/spotify.svg';
import TikTokIcon from '../../../assets/icons/tiktok.svg';
import TwitchIcon from '../../../assets/icons/twitch.svg';
import VimeoIcon from '../../../assets/icons/vimeo-v.svg';
import LinkIcon from '../../../assets/icons/link-solid.svg';
import { StyledContactSectionWrapper } from './ContactSectionWrapper.styles';
import { StyledIcon } from '../../atoms/Icon/Icon.styles';

const ContactSection = ({ data }) => {
	const isDark = useSelector((state) => state.isDark);

	const { t } = useTranslation();

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

	return (
		<StyledContactSectionWrapper $dark={isDark}>
			<p>{t('contact.description')}</p>
			<ul>
				{data?.url.map((socialMenuItem) => (
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
		</StyledContactSectionWrapper>
	);
};

export default ContactSection;

ContactSection.propTypes = {
	data: PropTypes.shape({
		url: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
	}).isRequired,
};
