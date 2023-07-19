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

		li {
			a {
				color: ${({ theme }) => theme.colors.white};

				p,
				h4 {
					padding: 0;
					margin: 0;
					text-align: left;
				}

				p {
					font-size: ${({ theme }) => theme.fontSize.mobile.s};

					&:last-of-type {
						font-family: ${({ theme }) => theme.fonts.mainFont};
					}
				}

				h4 {
					font-size: ${({ theme }) => theme.fontSize.mobile.lm};
				}
			}
		}
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
		display: block;
		opacity: 1;
		width: auto;
		height: auto;

		ul {
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
`;
