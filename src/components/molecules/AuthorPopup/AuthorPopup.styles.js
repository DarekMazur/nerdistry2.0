import styled from 'styled-components';

export const StyledAuthorPopup = styled.div`
	display: ${({ $hover }) => ($hover ? 'block' : 'none')};
	position: absolute;
	top: calc(100% - 8rem);
	left: 7rem;
	padding: 2rem;
	background-color: ${({ theme }) => theme.colors.white};
	height: auto;
	max-height: 40rem;
	overflow-y: auto;
	width: 26rem;
	z-index: 10;
	opacity: ${({ $hover }) => ($hover ? '1' : '0')};
	box-shadow: ${({ theme }) => `-6px 6px 25px -15px ${theme.colors.black}`};
	border-radius: 0.5rem;
	transition: opacity 0.3s ease-in-out;

	h3 {
		margin: 1rem 0 0.5rem;
	}

	p {
		margin: 0 0 2rem;
	}

	&:hover {
		display: block;
		opacity: 1;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
		top: calc(100% - 13rem);
		left: 11rem;
	}
`;
