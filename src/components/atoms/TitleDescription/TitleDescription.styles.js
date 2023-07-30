import styled from 'styled-components';

export const StyledTitleDescription = styled.h3`
	text-align: center;
	font-size: ${({ theme, $big }) =>
		$big ? theme.fontSize.mobile.xl : theme.fontSize.mobile.l};
	font-weight: ${({ theme, $big }) =>
		$big ? theme.weights.bold : theme.weights.semiBold};
	line-height: 1.2;

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
		font-size: ${({ theme, $big }) =>
			$big ? theme.fontSize.tablet.xl : theme.fontSize.tablet.l};
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
		font-size: ${({ theme, $big }) =>
			$big ? theme.fontSize.desktop.xl : theme.fontSize.desktop.l};
	}
`;
