import styled from 'styled-components';

export const StyledSinglePostExcerpt = styled.div`
	img {
		width: 15rem;
		height: 15rem;
		border-radius: 50%;
		object-fit: cover;
	}

	h4 {
		font-weight: ${({ theme }) => theme.weights.semiBold};
		font-size: ${({ theme }) => theme.fontSize.mobile.lm};
	}

	p {
		font-weight: ${({ theme }) => theme.weights.semiBold};

		span {
			color: ${({ theme, isDark }) =>
				isDark ? theme.colors.darkBlue : theme.colors.lightBlue};
			font-style: italic;
		}

		&:last-of-type {
			font-weight: ${({ theme }) => theme.weights.regular};
			font-size: ${({ theme }) => theme.fontSize.mobile.s};
		}
	}
`;
