import * as React from 'react';
import { useState } from 'react';
import MenuList from '../MenuList/MenuList';
import HeaderMouseIcon from '../../atoms/HeaderMounseIcon/HeaderMouseIcon';
import Logo from '../../atoms/Logo/Logo';
import { StyledHeader } from './Header.styles';
import { StyledPageHeader } from '../../atoms/PageHeader/PageHeader.styles';
import { StyledHeaderWrapper } from '../../molecules/HeaderWrapper/HeaderWrapper.styles';
import HeaderIconsWrapper from '../../atoms/HeaderIconsWrapper/HeaderIconsWrapper';
import { mainMenu } from '../../../utils/mock';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const handleMenuClick = () => setIsOpen((prevState) => !prevState);

	return (
		<StyledHeader>
			<div>
				<StyledHeaderWrapper position>
					<div>
						<Logo />
						<MenuList
							menuList={mainMenu}
							isOpen={isOpen}
							handleClick={handleMenuClick}
						/>
						<HeaderIconsWrapper handleClick={handleMenuClick} />
					</div>
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
