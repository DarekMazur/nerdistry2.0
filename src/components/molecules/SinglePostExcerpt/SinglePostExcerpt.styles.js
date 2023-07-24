import styled from 'styled-components';

export const StyledSinglePostExcerpt = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	img {
		width: 15rem;
		height: 15rem;
		border-radius: 50%;
		object-fit: cover;
		margin-bottom: 1rem;
	}

	h4 {
		font-weight: ${({ theme }) => theme.weights.semiBold};
		font-size: ${({ theme }) => theme.fontSize.mobile.lm};
		margin: 1rem 0 0;
	}

	p {
		font-weight: ${({ theme }) => theme.weights.semiBold};
		margin: 0;

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
`;
