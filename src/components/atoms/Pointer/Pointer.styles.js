import styled from 'styled-components';

export const Pointer = styled.p`
	cursor: pointer;
	display: none;

	@media (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
		display: block;
	}
`;
