import * as React from 'react';
import MouseIcon from '../../../assets/icons/mouseIcon.svg';
import { StyledMouseIcon } from './HeaderMouseIcon.styles';

const HeaderMouseIcon = () => {
	const handleClick = () => {
		const pageHeight = window.innerHeight;

		return window.scrollBy(0, pageHeight);
	};
	return (
		<StyledMouseIcon>
			<MouseIcon onClick={handleClick} />
		</StyledMouseIcon>
	);
};

export default HeaderMouseIcon;
