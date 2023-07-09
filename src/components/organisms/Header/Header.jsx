import * as React from 'react';
import MenuList from '../MenuLIst/MenuList';

function Header() {
	return (
		<header>
			<div>
				<span>Logo</span>
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
				<span>Switcher</span>
				<span>Hamburger</span>
			</div>
			<div>
				<h2>Nerdistry.</h2>
				<p>
					Z notatnika młodego deva, czyli od juniora do zera. Czy tam na
					odwrót... ;)
				</p>
			</div>
			<div>
				<span>Icon</span>
			</div>
		</header>
	);
}

export default Header;
