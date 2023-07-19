import styled from 'styled-components';

export const StyledMenuIcon = styled.div`
	@media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
		display: none !important;
	}
`;
