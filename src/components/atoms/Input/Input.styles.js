import styled from 'styled-components';

export const InputWrapper = styled.div`
	width: 100%;
	position: relative;
`;

export const StyledInput = styled.input`
	width: ${({ type }) => (type === 'checkbox' ? '2rem' : '100%')};
	height: ${({ name, type }) =>
		name === 'message' ? '15rem' : type === 'checkbox' ? '2rem' : '5rem'};
	margin: 1.5rem 0;
	padding: ${({ name }) => (name === 'message' ? '2rem 1rem' : '0 1rem')};
	color: ${({ theme, $dark }) =>
		$dark ? theme.colors.white : theme.colors.black};
	border: solid 0.1rem;
	border-color: ${({ theme, $error }) => ($error ? theme.colors.red : null)};
	background-color: ${({ theme, $dark }) =>
		$dark ? theme.colors.black : theme.colors.white};
`;

export const Label = styled.label`
	position: absolute;
	font-size: ${({ theme }) => theme.fontSize.mobile.m};
	top: ${({ type }) => (type === 'checkbox' ? '1.2rem' : '1.7rem')};
	left: ${({ type }) => (type === 'checkbox' ? '2.5rem' : '0.5rem')};
	transform-origin: 0 100%;
	transform: ${({ $blur }) =>
		$blur ? 'translateY(-1.5rem) scale(0.7)' : 'ranslateY(-1rem) scale(1)'};
	transition: transform 0.15s ease-in-out;
	opacity: 0.7;

	a {
		color: ${({ theme }) => theme.colors.lightBlue};
		font-weight: ${({ theme }) => theme.weights.semiBold};
		text-decoration: none;
	}
`;

export const ErrorMessage = styled.p`
	position: absolute;
	bottom: -3.5rem;
	font-size: ${({ theme }) => theme.fontSize.mobile.s};
	color: ${({ theme }) => theme.colors.red};
`;
