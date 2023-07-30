import * as React from 'react';
import { useState } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import MenuList from '../MenuList/MenuList';
import HeaderMouseIcon from '../../atoms/HeaderMounseIcon/HeaderMouseIcon';
import Logo from '../../atoms/Logo/Logo';
import { StyledHeader } from './Header.styles';
import { StyledPageHeader } from '../../atoms/PageHeader/PageHeader.styles';
import { StyledHeaderWrapper } from '../../molecules/HeaderWrapper/HeaderWrapper.styles';
import HeaderIconsWrapper from '../../atoms/HeaderIconsWrapper/HeaderIconsWrapper';
import { StyledTitleDescription } from '../../atoms/TitleDescription/TitleDescription.styles';

const Header = ({ pageInfo, title, subtitle }) => {
	const mainMenuData = useStaticQuery(graphql`
		query {
			strapiMainMenu {
				MenuElement {
					id
					Name
					url
					Description
				}
			}
		}
	`);
	const [isOpen, setIsOpen] = useState(false);
	const handleMenuClick = () => setIsOpen((prevState) => !prevState);

	return (
		<StyledHeader>
			<div>
				<StyledHeaderWrapper $isRow>
					<div>
						<Link to="/">
							{pageInfo?.Logo?.url ? (
								<img src={pageInfo.Logo.url} alt="" />
							) : (
								<Logo />
							)}
						</Link>
						<MenuList
							menuList={mainMenuData.strapiMainMenu.MenuElement}
							isOpen={isOpen}
							handleClick={handleMenuClick}
						/>
						<HeaderIconsWrapper handleClick={handleMenuClick} />
					</div>
				</StyledHeaderWrapper>
				<StyledHeaderWrapper $big={!!title}>
					<StyledPageHeader>
						{title || pageInfo?.Title || 'Nerdistry.'}
					</StyledPageHeader>
					<StyledTitleDescription as={title ? 'h3' : 'p'} $big={!!title}>
						{subtitle ||
							pageInfo?.Slogan ||
							'Z notatnika młodego deva, czyli od juniora do zera. Czy tam na odwrót... ;)'}
					</StyledTitleDescription>
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
	title: null,
	subtitle: null,
};

Header.propTypes = {
	pageInfo: PropTypes.shape({
		Logo: PropTypes.shape({
			url: PropTypes.string,
		}),
		Slogan: PropTypes.string,
		Title: PropTypes.string,
	}).isRequired,
	title: PropTypes.string,
	subtitle: PropTypes.string,
};
