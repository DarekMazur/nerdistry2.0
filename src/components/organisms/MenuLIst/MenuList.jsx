import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { StyledMenuList } from './MenuList.styles';

// eslint-disable-next-line react/prop-types
const MenuList = ({ menuList, isOpen }) => (
	<StyledMenuList isOpen={isOpen}>
		<ul>
			{menuList.map((listItem, index) => (
				<li>
					<Link to={listItem.url}>
						<p>0{index + 1}</p>
						<h4>{listItem.title}</h4>
						<p>{listItem.subtitle}</p>
					</Link>
				</li>
			))}
		</ul>
	</StyledMenuList>
);

export default MenuList;

MenuList.propTypes = {
	menuList: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string]))
		.isRequired,
};
