import * as React from 'react';
import MenuList from '../MenuLIst/MenuList';
import MenuIcon from '../../atoms/MenuIcon/MenuIcon';
import StyleSwitcher from '../../atoms/StyleSwitcher/StyleSwitcher';
import HeaderMouseIcon from '../../atoms/HeaderMounseIcon/HeaderMouseIcon';
import Logo from '../../atoms/Logo/Logo';

function Header() {
	return (
		<header>
			<div>
				<Logo />
				<MenuList
					menuList={[
						{
							title: 'Lorem',
							subtitle: 'Lorem Ipsum Dolor Sit Amet',
						},
						{
							title: 'Ipsum',
							subtitle: 'Lorem Ipsum Dolor Sit Amet',
						},
						{
							title: 'Dolor',
							subtitle: 'Lorem Ipsum Dolor Sit Amet',
						},
						{
							title: 'Sit Amet',
							subtitle: 'Lorem Ipsum Dolor Sit Amet',
						},
					]}
				/>
				<StyleSwitcher />
				<MenuIcon />
			</div>
			<div>
				<h2>Nerdistry.</h2>
				<p>
					Z notatnika młodego deva, czyli od juniora do zera. Czy tam na
					odwrót... ;)
				</p>
			</div>
			<div>
				<HeaderMouseIcon />
			</div>
		</header>
	);
}

export default Header;
