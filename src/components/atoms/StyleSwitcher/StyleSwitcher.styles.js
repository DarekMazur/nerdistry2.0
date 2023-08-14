import styled from 'styled-components';

export const StyledStyleSwitcher = styled.button`
	height: 2.5rem;
	width: 8rem;
	border-radius: 1.75rem;
	border: none;
	cursor: pointer;
	background-color: ${({ theme, $dark }) =>
		$dark ? theme.colors.black : theme.colors.white};
	position: relative;
	transition: background-color 0.2s 0.3s ease-in-out;
	margin-bottom: 1rem;

	svg {
		height: 2rem;
		position: absolute;
		top: 0.25rem;
		left: ${({ $dark }) => ($dark ? `calc(100% - 22.5px)` : `0.25rem`)};
		transition:
			left 0.5s ease-in-out,
			opacity 0.2s 0.3s ease-in-out;

		path {
			stroke: ${({ theme, $dark }) =>
				$dark ? theme.colors.white : theme.colors.black};
			fill: ${({ theme, $dark }) =>
				$dark ? theme.colors.white : theme.colors.black};
			transform-origin: 50% 50%;
			transition:
				stroke 0.2s 0.3s ease-in-out,
				fill 0.2s 0.3s ease-in-out;
		}

		&:nth-of-type(1) {
			opacity: ${({ $dark }) => ($dark ? `0` : `1`)};
		}

		&:nth-of-type(2) {
			opacity: ${({ $dark }) => ($dark ? `1` : `0`)};
		}
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
		height: 3.5rem;
		width: 10rem;

		svg {
			height: 3rem;
			left: ${({ $dark }) => ($dark ? `calc(100% - 32.5px)` : `0.25rem`)};
		}
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
		margin-bottom: 0;
	}
`;
