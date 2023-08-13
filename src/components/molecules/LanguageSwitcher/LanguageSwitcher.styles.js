import styled from 'styled-components';

export const StyledLanguageSwitcher = styled.ul`
	margin: 0 0 2rem;
	padding: 0;
	list-style: none;
	height: 2.5rem;
	width: 3.75rem;
	position: relative;
	z-index: 10;

	img {
		height: 2rem;
		width: auto;
		border: 0.1rem solid #000;
		border-radius: 0.5rem;
	}

	li {
		height: 100%;
		width: 100%;
		margin: 0;
		padding: 0;
	}

	ul {
		position: absolute;
		top: 2.5rem;
		right: 0;
		height: 100%;
		width: 100%;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
		height: 5rem;
		width: 7.5rem;

		img {
			height: 4rem;
		}
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
		height: 2.5rem;
		width: 3.75rem;

		img {
			height: 2rem;
		}
	}
`;
