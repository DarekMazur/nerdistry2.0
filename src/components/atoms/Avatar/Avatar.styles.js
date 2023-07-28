import styled from 'styled-components';

export const StyledAvatar = styled.img`
	position: absolute;
	bottom: 2rem;
	left: 1.5rem;
	width: 10rem;
	height: 10rem;
	background-color: ${({ theme }) => theme.colors.white};
	border-radius: 50%;
	border: ${({ theme }) => `0.3rem solid ${theme.colors.black}`};
`;
