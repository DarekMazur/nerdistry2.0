import styled from 'styled-components';

export const StyledIcon = styled.div`
	 position: ${({ isToTop }) => (isToTop ? 'fixed' : 'inherit')};
	 display: flex;
	justify-content: ${({ justify }) =>
		justify ? `${justify} !important` : 'center'};
	align-items: center;
	border-radius: ${({ isToTop }) => (isToTop ? '50%' : 'none')};
	width: ${({ isToTop }) => (isToTop ? '4rem' : 'unset')};
	height: ${({ isToTop }) => (isToTop ? '4rem' : 'unset')};
	bottom: 1.5rem;
	right: 1rem;
	opacity: ${({ isHidden }) => (isHidden ? '0' : '1')};
	transition: opacity 0.3s ease-in-out;

	svg {
		height: ${({ isToTop }) => (isToTop ? '3rem' : '4rem')};

		path {
			stroke: ${({ theme, isDark }) =>
				isDark ? theme.colors.black : theme.colors.white};
			fill: ${({ theme, isDark }) =>
				isDark ? theme.colors.black : theme.colors.white};
		}
	}
	
	@media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
		right: 3rem;
	}
}
`;
