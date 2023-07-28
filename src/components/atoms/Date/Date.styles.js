import styled from 'styled-components';

export const StyledDate = styled.p`
	font-size: ${({ $size }) => $size || 'inherit'};
	font-weight: ${({ theme }) => theme.weights.semiBold};
	margin: 0;
	transition: transform 0.3s ease-in-out;

	span {
		color: ${({ theme, $dark }) =>
			$dark ? theme.colors.darkBlue : theme.colors.lightBlue};
		font-style: italic;
	}
`;
