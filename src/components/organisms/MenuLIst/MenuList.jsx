import * as React from 'react';
import PropTypes from 'prop-types';

function MenuList({ menuList }) {
	return (
		<nav>
			<ul>
				{menuList.map((listItem) => (
					<li>
						<h4>{listItem.title}</h4>
						<p>{listItem.subtitle}</p>
					</li>
				))}
			</ul>
		</nav>
	);
}

export default MenuList;

MenuList.propTypes = {
	menuList: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string]))
		.isRequired,
};
