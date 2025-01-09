import styled from 'styled-components';

export const FiltersLabel = styled.button`
	transform-origin: bottom right;
	transform: rotate(-90deg);
	position: absolute;
	top: 0;
	right: 100%;
	border: none;
	padding: 1rem;
	background-color: ${({ theme }) => theme.colors.black};
	color: ${({ theme }) => theme.colors.white};
`;
