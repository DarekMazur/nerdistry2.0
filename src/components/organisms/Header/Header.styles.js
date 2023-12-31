import styled from 'styled-components';
import background from '../../../assets/images/headerBackground.jpg';
import altBgr from '../../../assets/images/rwgfy.jpg';

export const StyledHeader = styled.header`
	width: 100%;
	background: url(${({ $ru }) => ($ru ? altBgr : background)}) no-repeat
		center/cover;
	color: ${({ theme }) => theme.colors.white};

	& > div {
		background-color: ${({ theme }) => `${theme.colors.black}d9`};
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
		min-height: 100vh;

		& > div {
			min-height: 100vh;
		}
	}
`;
