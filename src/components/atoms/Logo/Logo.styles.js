import styled from 'styled-components';

export const StyledLogo = styled.div`
	svg {
		width: ${({ isFooter }) => (isFooter ? '5rem' : '6rem')};
		height: ${({ isFooter }) => (isFooter ? '5rem' : '6rem')};

		path {
			stroke: ${({ theme, isFooter }) =>
				isFooter ? theme.colors.white : theme.colors.black};

			&:last-of-type {
				fill: ${({ theme, isFooter }) =>
					isFooter ? theme.colors.white : theme.colors.black};
			}
		}
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
		svg {
			width: ${({ isFooter }) => (isFooter ? '5rem' : '10rem')};
			height: ${({ isFooter }) => (isFooter ? '5rem' : '10rem')};
		}
	}
`;
