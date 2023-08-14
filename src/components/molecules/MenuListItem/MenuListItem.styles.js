import styled from 'styled-components';

export const StyledMenuListItem = styled.li`
	a {
		color: ${({ theme }) => theme.colors.white};
		text-decoration: none;
		transition: color 0.3s ease-in-out;

		&:hover {
			color: ${({ theme }) => theme.colors.darkBlue};
		}

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

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
		a {
			p {
				font-size: ${({ theme }) => theme.fontSize.tablet.s};
			}

			h4 {
				font-size: ${({ theme }) => theme.fontSize.tablet.lm};
			}
		}
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
		width: 20rem;
		height: 100%;
		padding: 0 1rem;
		margin: 0 1rem;
		transition: background-color 0.3s ease-in-out;

		&:hover {
			background-color: ${({ theme }) => `${theme.colors.black}99`};
		}

		a {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: flex-start;
			text-align: left;
			width: 100%;
			height: 100%;

			p {
				font-size: 1.2rem;

				&:last-of-type {
					font-size: 0.8rem;
				}
			}

			h4 {
				font-size: ${({ theme }) => theme.fontSize.desktop.lm};
			}
		}
	}
`;
