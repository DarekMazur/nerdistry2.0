import styled from 'styled-components';

export const StyledPrivacyContent = styled.div`
	a {
		color: ${({ $dark, theme }) =>
			$dark ? theme.colors.darkBlue : theme.colors.lilghtBlue};
		width: ${({ theme }) => theme.weights.semiBold};
		text-decoration: none;
	}
`;
