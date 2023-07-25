import styled from 'styled-components';
import { Link } from 'gatsby';

export const StyledSinglePostExcerpt = styled(Link)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 1rem 0 8rem;
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

		&:last-of-type {
			font-weight: ${({ theme }) => theme.weights.regular};
			font-size: ${({ theme }) => theme.fontSize.mobile.s};
			width: 70%;
			max-width: 30rem;
		}
	}

	&:hover {
		background-color: ${({ theme }) => theme.colors.gray};

		h4,
		p:last-of-type {
			transform: translateY(2rem);
		}

		img {
			transform: scale(1.2);
		}
	}
`;
