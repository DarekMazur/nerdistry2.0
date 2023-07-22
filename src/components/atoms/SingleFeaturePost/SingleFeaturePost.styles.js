import styled from 'styled-components';

export const StyledSingleFeaturePost = styled.div`
	min-height: 28.5rem;
	width: 100%;
	background: ${({ cover }) =>
		cover ? `url(${cover}) center/cover no-repeat` : `unset`};
	color: ${({ theme }) => theme.colors.white};
	position: relative;

	& > div {
		background-color: ${({ theme }) => `${theme.colors.black}cc`};
		width: 100%;
		min-height: 28.5rem;
		height: 100%;
		padding: 3rem 5rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;

		h3 {
			font-size: ${({ theme }) => theme.fontSize.mobile.xxl};
			text-align: center;
			font-weight: ${({ theme }) => theme.weights.semiBold};
			margin: 0 auto;
		}

		p {
			margin: 2rem 0;
			line-height: 1.5;
		}
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
		min-height: 69rem;

		& > div {
			min-height: 69rem;
			width: 50%;
		}
	}
`;
