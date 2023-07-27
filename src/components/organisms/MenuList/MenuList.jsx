import * as React from 'react';
import PropTypes from 'prop-types';
import { StyledMenuList } from './MenuList.styles';
import MenuListItem from '../../molecules/MenuListItem/MenuListItem';
import CloseIcon from '../../../assets/icons/xmark-solid.svg';
import { StyledIcon } from '../../atoms/Icon/Icon.styles';

const MenuList = ({ menuList, isOpen, handleClick }) => (
	<StyledMenuList isOpen={isOpen}>
		<StyledIcon>
			<CloseIcon onClick={handleClick} />
		</StyledIcon>
		<ul>
			{menuList.map((listItem, index) => (
				<MenuListItem key={listItem.id} listItem={listItem} index={index} />
			))}
		</ul>
	</StyledMenuList>
);

export default MenuList;

MenuList.propTypes = {
	menuList: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object]))
		.isRequired,
	handleClick: PropTypes.func.isRequired,
	isOpen: PropTypes.bool.isRequired,
};
