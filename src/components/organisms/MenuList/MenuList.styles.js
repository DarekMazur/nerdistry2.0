import styled from 'styled-components';

export const StyledMenuList = styled.nav`
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	display: ${({ isOpen }) => (isOpen ? `block` : 'none')};
	opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
	position: fixed;
	top: 0;
	left: 0;
	background-color: ${({ theme }) => theme.colors.black};
	z-index: 100;

	ul {
		padding: 0;
		margin: 0;
		height: 100%;
		list-style: none;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
		font-family: ${({ theme }) => theme.fonts.menuFont};
	}

	svg {
		position: absolute;
		top: calc(-100vh + 2.5rem);
		right: 1rem;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
		width: auto;
		height: 20rem;
		overflow: auto;
		display: block;
		opacity: 1;
		position: static;
		background-color: transparent;
		z-index: 1;

		ul {
			flex-direction: row;
			justify-content: center;
			align-items: center;
		}

		svg {
			display: none;
		}
	}
`;
