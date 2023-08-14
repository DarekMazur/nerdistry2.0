import * as React from 'react';
import MouseIcon from '../../../assets/icons/mouseIcon.svg';
import { StyledMouseIcon } from './HeaderMouseIcon.styles';

const HeaderMouseIcon = () => {
	const handleClick = () => {
		const headerElement = document.querySelector('header');
		const headerHeight = headerElement.offsetHeight;

		return window.scrollTo(0, headerHeight);
	};
	return (
		<StyledMouseIcon>
			<MouseIcon onClick={handleClick} />
		</StyledMouseIcon>
	);
};

export default HeaderMouseIcon;
