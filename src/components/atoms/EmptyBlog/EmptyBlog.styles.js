import styled from 'styled-components';

export const StyledEmptyBlog = styled.div`
	min-height: 60rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 2rem;

	h3 {
		font-size: ${({ theme }) => theme.fontSize.mobile.xxl};
		padding: 2rem;
	}

	p {
		font-size: ${({ theme }) => theme.fontSize.mobile.lm};
	}

	img {
		height: 20rem;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
		img {
			height: 30rem;
		}
	}
`;
