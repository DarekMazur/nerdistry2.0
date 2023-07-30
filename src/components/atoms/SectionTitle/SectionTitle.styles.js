import styled from 'styled-components';

export const StyledSectionTitle = styled.h3`
	font-family: ${({ theme }) => theme.fonts.headerFont};
	font-size: ${({ theme, $big }) =>
		$big ? theme.fontSize.mobile.xxl : theme.fontSize.mobile.l};
	font-weight: ${({ theme }) => theme.weights.semiBold};
	line-height: 1.2;
	text-align: center;
	margin: 2rem 0;

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
		font-size: ${({ theme, $big }) =>
			$big ? theme.fontSize.tablet.xxl : theme.fontSize.tablet.l};
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
		font-size: ${({ theme, $big }) =>
			$big ? theme.fontSize.desktop.xxl : theme.fontSize.desktop.l};
	}
`;
