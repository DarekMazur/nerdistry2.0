import * as React from 'react';
import LinkedinIcon from '../../../assets/icons/linkedin-in.svg';
import TwitterIcon from '../../../assets/icons/twitter.svg';
import GithubIcon from '../../../assets/icons/github.svg';
import { StyledIcon } from '../../atoms/Icon/Icon.styles';
import { StyledFooter } from './Footer.styles';
import Logo from '../../atoms/Logo/Logo';
import { getCurrentYear } from '../../../helpers/getCurrentYear';

const Footer = () => {
	const menu = [
		{
			name: 'Lorem',
			url: '#',
		},
		{
			name: 'Ipsum',
			url: '#',
		},
		{
			name: 'Dolor',
			url: '#',
		},
		{
			name: 'Sit',
			url: '#',
		},
		{
			name: 'Amet',
			url: '#',
		},
	];

	const socialMedia = [
		{
			name: 'Linkedin',
			url: '#',
			icon: <LinkedinIcon />,
		},
		{
			name: 'Github',
			url: '#',
			icon: <GithubIcon />,
		},
		{
			name: 'Twitter',
			url: '#',
			icon: <TwitterIcon />,
		},
	];
	return (
		<StyledFooter>
			<Logo isFooter />
			<nav>
				<ul>
					{menu.map((el) => (
						<li>
							<a href={el.url}>{el.name}</a>
						</li>
					))}
				</ul>
			</nav>
			<p>Gacek &copy; {getCurrentYear()}</p>
			<ul>
				{socialMedia.map((el) => (
					<li>
						<a href={el.url} target="_blank" rel="noreferrer">
							<StyledIcon>{el.icon}</StyledIcon>
						</a>
					</li>
				))}
			</ul>
		</StyledFooter>
	);
};

export default Footer;
