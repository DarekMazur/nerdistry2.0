import styled from 'styled-components';

export const StyledLogo = styled.div`
	svg {
		width: 100px;
		height: 100px;
	}

	@media screen and (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
		svg {
			width: 60px;
			height: 60px;
		}
	}
`;
