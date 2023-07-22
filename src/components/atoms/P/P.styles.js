import styled from 'styled-components';

export const P = styled.p`
	font-weight: ${({ theme, isBold }) =>
		isBold ? theme.weights.semiBold : theme.weights.regular};
	font-size: ${({ theme }) => theme.fontSize.mobile.m};
	margin: 0;
	padding: 0;

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet};) {
		font-size: ${({ theme }) => theme.fontSize.tablet.m};
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop};) {
		font-size: ${({ theme }) => theme.fontSize.desktop.m};
	}
`;
