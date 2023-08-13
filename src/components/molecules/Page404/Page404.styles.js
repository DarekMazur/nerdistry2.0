import { Link } from 'gatsby';
import styled from 'styled-components';

export const Styled404 = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	box-sizing: border-box;
	height: 100vh;
	width: 100vw;
	background-color: ${({ theme }) => theme.colors.black};
	background-image: radial-gradient(#11581e, #041607),
		url('https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif');
	background-repeat: no-repeat;
	background-size: cover;
	font-family: ${({ theme }) => theme.fonts.notFoundFont};
	font-size: 1.5rem;
	color: rgba(128, 255, 128, 0.8);
	text-shadow:
		0 0 1ex rgba(51, 255, 51, 1),
		0 0 2px rgba(255, 255, 255, 0.8);
`;

export const StyledNoise = styled.div`
	pointer-events: none;
	position: absolute;
	width: 100%;
	height: 100%;
	background-image: url('https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif');
	background-repeat: no-repeat;
	background-size: cover;
	z-index: -1;
	opacity: 0.02;
`;

export const Styledoverlay = styled.div`
	pointer-events: none;
	position: absolute;
	width: 100%;
	height: 100%;
	background: repeating-linear-gradient(
		180deg,
		rgba(0, 0, 0, 0) 0,
		rgba(0, 0, 0, 0.3) 50%,
		rgba(0, 0, 0, 0) 100%
	);
	background-size: auto 4px;
	z-index: 1;

	&::before {
		content: '';
		pointer-events: none;
		position: absolute;
		display: block;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		background-image: linear-gradient(
			0deg,
			transparent 0%,
			rgba(32, 128, 32, 0.2) 2%,
			rgba(32, 128, 32, 0.8) 3%,
			rgba(32, 128, 32, 0.2) 3%,
			transparent 100%
		);
		background-repeat: no-repeat;
		animation: scan 7.5s linear 0s infinite;

		@keyframes scan {
			0% {
				background-position: 0 -100vh;
			}
			35%,
			100% {
				background-position: 0 100vh;
			}
		}
	}
`;

export const StyledTerminal = styled.div`
	box-sizing: inherit;
	position: absolute;
	height: 100%;
	width: 1000px;
	max-width: 100%;
	padding: 4rem;
	text-transform: uppercase;
`;

export const StyledOutput = styled.p`
	color: rgba(128, 255, 128, 0.8);
	text-shadow:
		0 0 1px rgba(51, 255, 51, 0.4),
		0 0 2px rgba(255, 255, 255, 0.8);

	&::before {
		content: '> ';
	}
`;

export const StyledLink = styled(Link)`
	color: ${({ theme }) => theme.colors.white};
	text-decoration: none;

	&::before {
		content: '[';
	}

	&::after {
		content: ']';
	}
`;

export const StyledErrorCode = styled.span`
	color: ${({ theme }) => theme.colors.white};
`;
