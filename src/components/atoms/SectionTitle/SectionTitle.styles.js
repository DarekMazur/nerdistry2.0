import styled from 'styled-components';

export const StyledSectionTitle = styled.h3`
	font-family: ${({ theme }) => theme.fonts.headerFont};
	font-size: ${({ theme }) => theme.fontSize.mobile.xxl};
	text-align: center;

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
		font-size: ${({ theme }) => theme.fontSize.tablet.xxl};
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
		font-size: ${({ theme }) => theme.fontSize.desktop.xxl};
	}
`;
