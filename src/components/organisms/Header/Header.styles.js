import styled from 'styled-components';
import background from '../../../assets/images/headerBackground.jpg';

export const StyledHeader = styled.header`
	width: 100%;
	background: url(${background}) no-repeat center/cover;
	color: ${({ theme }) => theme.colors.white};

	& > div {
		background-color: ${({ theme }) => `${theme.colors.black}d9`};
	}
`;
