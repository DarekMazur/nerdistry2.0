import styled from 'styled-components';

export const StyledIcon = styled.div`
	justify-content: ${({ justify }) => `${justify} !important`};

	svg {
		height: 4rem;

		path {
			stroke: ${({ theme, isDark }) =>
				isDark ? theme.colors.black : theme.colors.white};
			fill: ${({ theme, isDark }) =>
				isDark ? theme.colors.black : theme.colors.white};
		}
	}
`;
