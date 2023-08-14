import styled from 'styled-components';

export const StyledMenuIcon = styled.div`
	path {
		fill: ${({ theme }) => theme.colors.white} !important;
		stroke: ${({ theme }) => theme.colors.white} !important;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
		display: none !important;
	}
`;
