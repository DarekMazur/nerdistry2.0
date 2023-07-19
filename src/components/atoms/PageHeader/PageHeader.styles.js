import styled from 'styled-components';

export const StyledPageHeader = styled.h2`
	letter-spacing: 0.5rem;
	font-family: ${({ theme }) => theme.fonts.topHeaderFont};
	font-size: ${({ theme }) => theme.fontSize.mobile.xxl};
	opacity: 0.15;
	text-align: center;
	text-transform: uppercase;
	margin-top: 12rem;

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
		font-size: ${({ theme }) => theme.fontSize.tablet.xxl};
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
		font-size: ${({ theme }) => theme.fontSize.desktop.xxl};
	}
`;
