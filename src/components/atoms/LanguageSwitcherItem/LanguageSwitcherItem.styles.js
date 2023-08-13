import styled from 'styled-components';

export const StyledLanguageSwitcherItem = styled.li`
	height: 2.5rem;
	width: 3.75rem;
	padding: 1.5rem 0 !important;
	position: relative;
	opacity: 0;

	a {
		position: absolute;
		top: 0;
		left: 0;
		display: block;
		height: 2.5rem;
		width: 3.75rem;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
		height: 5rem;
		width: 7.5rem;

		a {
			top: 2rem;
			height: 5rem;
			width: 7.5rem;
		}
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
		height: 2.5rem;
		width: 3.75rem;

		a {
			top: 0;
			height: 2.5rem;
			width: 3.75rem;
		}
	}
`;
