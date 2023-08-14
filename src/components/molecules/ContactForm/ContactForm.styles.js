import styled from 'styled-components';

export const StyledContactForm = styled.div`
	margin: 0 5rem;

	form {
		display: flex;
		flex-direction: column;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
		width: 50%;
	}
`;
