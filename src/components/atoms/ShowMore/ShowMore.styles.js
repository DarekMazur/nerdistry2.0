import styled from 'styled-components';

export const StyledShowMore = styled.p`
	display: none;
	position: relative;
	color: ${({ theme }) => theme.colors.white};
	font-family: ${({ theme }) => theme.fonts.headerFont};
	font-size: ${({ theme }) => theme.fontSize.mobile.xxl};
	font-weight: ${({ theme }) => theme.weights.semiBold};
	-webkit-text-stroke: ${({ theme }) => `0.2rem ${theme.colors.black}`};
	padding: 0;
	margin: 0;
	z-index: 1;

	@media (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
		display: flex;
		font-size: ${({ theme }) => theme.fontSize.tablet.xl};
		max-width: 50vw;
	}

	@media (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
		font-size: ${({ theme }) => theme.fontSize.desktop.xl};
		max-width: 100vw;
	}
`;
