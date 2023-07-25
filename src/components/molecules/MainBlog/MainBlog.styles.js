import styled from 'styled-components';

export const StyledMainBlog = styled.div`
	display: flex;
	flex-direction: column;

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
		display: grid;
		grid-template-rows: 1fr 1fr;
		grid-template-columns: 1fr 1fr;
		align-items: stretch;
	}
`;
