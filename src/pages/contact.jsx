import * as React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/templates/Layout/Layout';
import Wrapper from '../components/molecules/Wrapper/Wrapper';
import AppProviders from '../providers/AppProviders';
import LinkedinIcon from '../assets/icons/linkedin-in.svg';
import GithubIcon from '../assets/icons/github.svg';
import TwitterIcon from '../assets/icons/twitter.svg';
import YouTubeIcon from '../assets/icons/youtube.svg';
import FacebookIcon from '../assets/icons/facebook-f.svg';
import BitBucketIcon from '../assets/icons/bitbucket.svg';
import DiscordIcon from '../assets/icons/discord.svg';
import FlickrIcon from '../assets/icons/flickr.svg';
import GitLabIcon from '../assets/icons/gitlab.svg';
import PatroniteIcon from '../assets/icons/patronite.svg';
import SpotifyIcon from '../assets/icons/spotify.svg';
import TikTokIcon from '../assets/icons/tiktok.svg';
import TwitchIcon from '../assets/icons/twitch.svg';
import VimeoIcon from '../assets/icons/vimeo-v.svg';
import LinkIcon from '../assets/icons/link-solid.svg';
import { StyledIcon } from '../components/atoms/Icon/Icon.styles';
import { StyledContactSectionWrapper } from '../components/molecules/ContactSectionWrapper/ContactSectionWrapper.styles';

const ContactPage = () => {
	const socialData = useStaticQuery(graphql`
		query {
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

	return (
		<AppProviders>
			<Helmet>
				<title>Contact | Nerdistry</title>
				<meta name="description" content="lorem ipsum" />
			</Helmet>
			<Layout title="Contact" isSubtitleHidden>
				<Wrapper title="Stay in contact!">
					<StyledContactSectionWrapper>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
							amet asperiores cum doloribus esse in incidunt inventore, nemo
							omnis porro qui repudiandae sit soluta tempora unde ut vero. Alias
							amet asperiores aspernatur blanditiis commodi consequatur corporis
							cumque deleniti dicta dignissimos dolore doloremque error eum ex
							facere fugiat ipsa iste labore laboriosam, magnam magni modi
							necessitatibus nemo nulla odit quam quibusdam quisquam, ratione
							rem rerum saepe sapiente sed suscipit tempora tempore vero
							voluptatibus! Corporis culpa deserunt est et, eveniet excepturi
							fugiat inventore ipsam, iste laborum minus natus neque
							reprehenderit tempora ut, voluptatem voluptates. Adipisci
							blanditiis cum eum, quos similique voluptates. A!
						</p>
						<ul>
							{socialData.strapiSocialMenu.url.map((socialMenuItem) => (
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
					<div>FORM</div>
				</Wrapper>
			</Layout>
		</AppProviders>
	);
};
export default ContactPage;
