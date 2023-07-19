import * as React from 'react';
import PropTypes from 'prop-types';
import { StyledMenuList } from './MenuList.styles';
import MenuListItem from '../../molecules/MenuListItem/MenuListItem';

// eslint-disable-next-line react/prop-types
const MenuList = ({ menuList, isOpen }) => (
	<StyledMenuList isOpen={isOpen}>
		<ul>
			{menuList.map((listItem, index) => (
				<MenuListItem listItem={listItem} index={index} />
			))}
		</ul>
	</StyledMenuList>
);

export default MenuList;

MenuList.propTypes = {
	menuList: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string]))
		.isRequired,
};
