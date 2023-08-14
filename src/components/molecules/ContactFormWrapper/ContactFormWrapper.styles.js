import styled from 'styled-components';

export const StyledContactFormWrapper = styled.div`
	display: static;
	width: 100%;

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
		display: flex;
		flex-direction: column;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
		flex-direction: row;
	}
`;
