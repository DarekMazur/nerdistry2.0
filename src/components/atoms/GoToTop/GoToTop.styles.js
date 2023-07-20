import styled from 'styled-components';

export const StyledGoToTop = styled.div`
	border-radius: 50%;
	background-color: ${({ theme, isDark }) =>
		isDark ? theme.colors.white : theme.colors.black};
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 4rem;
	height: 4rem;
	bottom: 1.5rem;
	right: 1rem;
	opacity: ${({ isHidden }) => (isHidden ? '0' : '1')};
	transition:
		transform 0.1s ease-in-out,
		opacity 0.3s ease-in-out;

	&:has(+ div:hover) {
		transform: scale(1.3);
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
		right: 3rem;
	}
`;
