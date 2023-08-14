import styled from 'styled-components';

export const StyledHeaderWrapper = styled.div`
	padding: 2rem;

	div {
		display: flex;
		flex-direction: ${({ $isRow }) => ($isRow ? 'row' : 'column')};
		justify-content: ${({ $isRow }) => ($isRow ? 'space-between' : 'center')};
		align-items: ${({ $isRow }) => ($isRow ? 'flex-start' : 'center')};
		color: ${({ theme }) => theme.colors.white};
		font-size: ${({ theme }) => theme.fontSize.mobile.xl};
		text-align: center;
		line-height: 1;
	}

	img {
		height: 6rem;
		width: 6rem;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
		font-size: ${({ theme }) => theme.fontSize.tablet.xl};

		img {
			height: 10rem;
			width: 10rem;
		}
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
		font-size: ${({ theme }) => theme.fontSize.desktop.xl};
	}
`;
