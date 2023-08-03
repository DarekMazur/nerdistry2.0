import styled from 'styled-components';

export const StyledProjectIconWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 6rem;
	color: inherit;
	text-decoration: none;
	font-size: ${({ theme }) => theme.fontSize.mobile.l};

	p {
		padding: 0 0 0.7rem;
		margin: 0;
	}

	div {
		width: fit-content;

		svg {
			height: 3rem;
			margin: 0 2rem;
		}
	}
`;
