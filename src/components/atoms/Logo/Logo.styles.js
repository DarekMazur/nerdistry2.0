import styled from 'styled-components';

export const StyledLogo = styled.div`
	svg {
		width: 10rem;
		height: 10rem;
	}

	@media screen and (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
		svg {
			width: 6rem;
			height: 6rem;
		}
	}
`;
