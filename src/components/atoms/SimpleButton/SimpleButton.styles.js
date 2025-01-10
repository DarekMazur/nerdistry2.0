import styled from 'styled-components';

export const SimpleButton = styled.button`
	display: block;
	color: ${({ theme }) => theme.colors.black};
	text-decoration: none;
	background-color: ${({ theme }) => theme.colors.white};
	width: 15rem;
	height: 3rem;
	border: 0.2rem solid black;
	cursor: pointer;
	overflow: hidden;
	z-index: 1;
	opacity: 0.8;
	transition: opacity 0.25s;

	&:hover {
		opacity: 1;
	}

	&:active {
		opacity: 0.1;
	}
`;
