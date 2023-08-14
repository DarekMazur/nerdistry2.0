import styled from 'styled-components';

export const StyledMouseIcon = styled.button`
	@keyframes scroll-animation {
		0% {
			opacity: 0;
			transform: translateY(-20%);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}

	display: none;
	background-color: transparent;
	border: none;
	width: 100%;

	svg {
		cursor: pointer;

		path {
			stroke: ${({ theme }) => theme.colors.white};
			fill: transparent;
			transition: all 0.3s ease-in-out;

			&:last-of-type {
				fill: ${({ theme }) => theme.colors.white};
			}
		}

		&:hover {
			path {
				fill: ${({ theme }) => theme.colors.white};

				&:last-of-type {
					stroke: ${({ theme }) => theme.colors.black};
					fill: ${({ theme }) => theme.colors.black};
				}
			}
		}
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
		display: flex;
		justify-content: center;
		padding-bottom: 2rem;

		path:last-of-type {
			animation-name: scroll-animation;
			animation-duration: 1.2s;
			animation-iteration-count: infinite;
		}
	}
`;
