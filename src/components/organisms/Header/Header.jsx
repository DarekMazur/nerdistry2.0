import * as React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import MenuList from '../MenuList/MenuList';
import MenuIcon from '../../atoms/MenuIcon/MenuIcon';
import StyleSwitcher from '../../atoms/StyleSwitcher/StyleSwitcher';
import HeaderMouseIcon from '../../atoms/HeaderMounseIcon/HeaderMouseIcon';
import Logo from '../../atoms/Logo/Logo';
import { StyledHeader } from './Header.styles';
import { StyledPageHeader } from '../../atoms/PageHeader/PageHeader.styles';
import { StyledHeaderWrapper } from '../../molecules/HeaderWrapper/HeaderWrapper.styles';
import { StyledIcon } from '../../atoms/Icon/Icon.styles';

const menuItems = [
	{
		title: 'Lorem',
		subtitle: 'Lorem Ipsum Dolor Sit Amet',
		url: '#',
	},
	{
		title: 'Ipsum',
		subtitle: 'Lorem Ipsum Dolor Sit Amet',
		url: '#',
	},
	{
		title: 'Dolor',
		subtitle: 'Lorem Ipsum Dolor Sit Amet',
		url: '#',
	},
	{
		title: 'Sit Amet',
		subtitle: 'Lorem Ipsum Dolor Sit Amet',
		url: '#',
	},
];

const Header = ({ version }) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleMenuClick = () => setIsOpen((prevState) => !prevState);

	return (
		<StyledHeader>
			<div>
				<StyledHeaderWrapper position>
					<div>
						<Logo />
						<MenuList menuList={menuItems} isOpen={isOpen} />
						<StyleSwitcher isDark={version} />
					</div>
					<StyledIcon isDark={version} justify="flex-end">
						<MenuIcon handleClick={handleMenuClick} />
					</StyledIcon>
				</StyledHeaderWrapper>
				<StyledHeaderWrapper>
					<StyledPageHeader>Nerdistry.</StyledPageHeader>
					<p>
						Z notatnika młodego deva, czyli od juniora do zera. Czy tam na
						odwrót... ;)
					</p>
				</StyledHeaderWrapper>
				<div>
					<HeaderMouseIcon />
				</div>
			</div>
		</StyledHeader>
	);
};

export default Header;

Header.defaultProps = {
	version: false,
};

Header.propTypes = {
	version: PropTypes.bool,
};
