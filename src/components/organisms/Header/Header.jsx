import * as React from 'react';
import MenuList from '../MenuLIst/MenuList';
import MenuIcon from '../../atoms/MenuIcon/MenuIcon';
import StyleSwitcher from '../../atoms/StyleSwitcher/StyleSwitcher';
import HeaderMouseIcon from '../../atoms/HeaderMounseIcon/HeaderMouseIcon';
import Logo from '../../atoms/Logo/Logo';

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

const Header = () => (
	<header>
		<div>
			<Logo />
			<MenuList menuList={menuItems} />
			<StyleSwitcher />
			<MenuIcon />
		</div>
		<div>
			<h2>Nerdistry.</h2>
			<p>
				Z notatnika młodego deva, czyli od juniora do zera. Czy tam na odwrót...
				;)
			</p>
		</div>
		<div>
			<HeaderMouseIcon />
		</div>
	</header>
);

export default Header;
