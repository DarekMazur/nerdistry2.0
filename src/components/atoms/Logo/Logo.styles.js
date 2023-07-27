import styled from 'styled-components';

export const StyledLogo = styled.div`
	svg {
		width: ${({ $footer }) => ($footer ? '5rem' : '6rem')};
		height: ${({ $footer }) => ($footer ? '5rem' : '6rem')};

		path {
			stroke: ${({ theme, $footer }) =>
				$footer ? theme.colors.white : theme.colors.black};

			&:last-of-type {
				fill: ${({ theme, $footer }) =>
					$footer ? theme.colors.white : theme.colors.black};
			}
		}
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
		svg {
			width: ${({ $footer }) => ($footer ? '5rem' : '10rem')};
			height: ${({ $footer }) => ($footer ? '5rem' : '10rem')};
		}
	}
`;
