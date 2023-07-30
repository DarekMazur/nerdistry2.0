import styled from 'styled-components';

export const ScrollEndMessage = styled.p`
	font-size: ${({ theme }) => theme.fontSize.mobile.lm};
	grid-column: span 2;
	justify-self: center;
	text-align: center;
	margin-top: 0;

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
		margin-top: 5rem;
	}
`;
