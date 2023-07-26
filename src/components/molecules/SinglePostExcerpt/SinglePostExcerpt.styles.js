import styled from 'styled-components';
import { Link } from 'gatsby';

export const StyledSinglePostExcerpt = styled(Link)`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	padding: 3rem 0 9rem;
	text-decoration: none;
	background-color: transparent;
	color: ${({ theme, isDark }) =>
		isDark ? theme.colors.white : theme.colors.black};
	transition: background-color 0.3s ease-in-out;
	overflow: hidden;
	position: relative;

	h4 {
		font-weight: ${({ theme }) => theme.weights.semiBold};
		font-size: ${({ theme }) => theme.fontSize.mobile.lm};
		margin: 1rem 0 0;
		transition: transform 0.3s ease-in-out;
	}

	p {
		font-weight: ${({ theme }) => theme.weights.semiBold};
		margin: 0;
		transition: transform 0.3s ease-in-out;

		span {
			color: ${({ theme, isDark }) =>
				isDark ? theme.colors.darkBlue : theme.colors.lightBlue};
			font-style: italic;
		}

		&:nth-last-of-type(2),
		&:nth-last-of-type(1) {
			font-weight: ${({ theme }) => theme.weights.regular};
			font-size: ${({ theme }) => theme.fontSize.mobile.s};
			width: 70%;
			max-width: 30rem;
		}

		&:nth-last-of-type(1) {
			font-weight: ${({ theme }) => theme.weights.semiBold};
			margin: 1rem 0 0;
		}
	}

	&:hover {
		background-color: ${({ theme, isDark }) =>
			isDark ? theme.colors.black : theme.colors.gray};

		h4,
		p:nth-last-of-type(2),
		p:nth-last-of-type(1) {
			transform: translateY(2rem);
		}

		img {
			transform: scale(1.2);
		}
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
		border: 0.1rem solid black;

		&:nth-of-type(n) {
			border-width: 0.1rem 0.1rem 0.1rem 0;
		}

		&:nth-of-type(2n) {
			border-width: 0.1rem 0 0.1rem 0.1rem;
		}

		&:nth-of-type(1) {
			border-width: 0 0.1rem 0.1rem 0;
		}

		&:nth-of-type(2) {
			border-width: 0 0 0.1rem 0.1rem;
		}

		&:nth-last-of-type(1) {
			border-width: 0.1rem 0 0 0.1rem;
		}

		&:nth-last-of-type(2) {
			border-width: 0.1rem 0.1rem 0 0;
		}
	}
`;
