import * as React from 'react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ToTopIcon from '../../../assets/icons/chevron-up-solid.svg';
import { StyledIcon } from '../Icon/Icon.styles';
import useScrollPosition from '../../../hooks/useScrollPosition';
import { StyledGoToTop } from './GoToTop.styles';

const GoToTop = () => {
	const isDark = useSelector((state) => state.isDark);

	const [isHidden, setIsHidden] = useState(true);
	const handleClick = () => window.scrollTo(0, 0);

	const scrollPosition = useScrollPosition();

	useEffect(
		() => (scrollPosition > 500 ? setIsHidden(false) : setIsHidden(true)),
		[scrollPosition]
	);

	return (
		<>
			<StyledGoToTop isDark={isDark} isHidden={isHidden} />
			<StyledIcon isToTop isDark={isDark} isHidden={isHidden}>
				<ToTopIcon onClick={handleClick} />
			</StyledIcon>
		</>
	);
};
export default GoToTop;
