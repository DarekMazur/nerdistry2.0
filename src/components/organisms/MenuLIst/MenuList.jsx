import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

function MenuList({ menuList }) {
	return (
		<nav>
			<ul>
				{menuList.map((listItem) => (
					<li>
						<Link to={listItem.url}>
							<h4>{listItem.title}</h4>
							<p>{listItem.subtitle}</p>
						</Link>
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
