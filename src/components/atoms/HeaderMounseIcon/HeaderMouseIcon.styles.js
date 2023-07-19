import styled from 'styled-components';

export const StyledMouseIcon = styled.img`
	display: none;

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
		display: block;
	}
`;
