import styled from 'styled-components';

export const StyledFooter = styled.footer`
	background-color: ${({ theme }) => theme.colors.black};
	color: ${({ theme }) => theme.colors.white};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 2rem;

	a {
		color: ${({ theme }) => theme.colors.white};
		text-decoration: none;

		&:hover {
			color: ${({ theme }) => theme.colors.darkBlue};
		}
	}

	ul {
		display: flex;
		list-style: none;
		font-family: 'Montserrat Alternates', sans-serif;
		font-size: ${({ theme }) => theme.fontSize.mobile.m};
		padding: 0;
		margin: 1rem 0;

		li {
			margin: 0 1.2rem;
		}
	}

	p {
		font-size: 0.8rem;
		padding-bottom: 2rem;
		margin: 0;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
		ul {
			font-size: ${({ theme }) => theme.fontSize.desktop.lm};
		}
	}
`;
