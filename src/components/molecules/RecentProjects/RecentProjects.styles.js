import styled from 'styled-components';

export const StyledRecentProjects = styled.div`
	@media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;
