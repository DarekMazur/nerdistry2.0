import styled from 'styled-components';

export const StyledLogo = styled.div`
	svg {
		width: 6rem;
		height: 6rem;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
		svg {
			width: 10rem;
			height: 10rem;
		}
	}
`;
