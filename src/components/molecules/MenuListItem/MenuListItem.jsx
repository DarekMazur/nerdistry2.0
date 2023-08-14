import * as React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { StyledMenuListItem } from './MenuListItem.styles';

const MenuListItem = ({ listItem, index }) => (
	<StyledMenuListItem>
		<Link to={listItem.url}>
			<p>0{index + 1}</p>
			<h4>{listItem.Name}</h4>
			<p>{listItem.Description}</p>
		</Link>
	</StyledMenuListItem>
);

export default MenuListItem;

MenuListItem.propTypes = {
	index: PropTypes.number.isRequired,
	listItem: PropTypes.shape({
		url: PropTypes.string,
		Name: PropTypes.string,
		Description: PropTypes.string,
	}).isRequired,
};
