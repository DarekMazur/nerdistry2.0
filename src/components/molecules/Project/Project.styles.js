import styled from 'styled-components';

export const StyledProject = styled.div`
	display: flex;
	padding: 5.3rem 0;
	flex-direction: column;
	width: 100vw;

	@media (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
		width: 150vw;
		flex-direction: row;
	}
`;
