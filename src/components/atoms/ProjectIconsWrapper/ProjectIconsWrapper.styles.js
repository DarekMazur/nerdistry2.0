import styled from 'styled-components';

export const StyledProjectIconsWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;

	svg {
		height: 4rem;
		margin: 0 0.5rem;
		cursor: pointer;

		path {
			stroke: ${({ theme, $dark }) =>
				$dark ? theme.colors.white : theme.colors.black};
			fill: ${({ theme, $dark }) =>
				$dark ? theme.colors.white : theme.colors.black};
		}

		&:hover {
			path {
				stroke: ${({ theme, $dark }) =>
					$dark ? theme.colors.darkBlue : theme.colors.lightBlue};
				fill: ${({ theme, $dark }) =>
					$dark ? theme.colors.darkBlue : theme.colors.lightBlue};
				transition:
					fill 0.3s ease-in-out,
					stroke 0.3s ease-in-out;
			}
		}

		@media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
			svg {
				height: 8rem;
			}
		}

		@media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
			svg {
				height: 4rem;
			}
		}
	}
`;
