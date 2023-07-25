import styled from 'styled-components';

export const StyledMainAbout = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	svg {
		border-radius: 50%;
		border: ${({ theme, isDark }) =>
			isDark
				? `0.3rem solid ${theme.colors.white}`
				: `0.3rem solid ${theme.colors.black}`};
	}

	p {
		text-align: center;
		font-size: 1.6rem;
	}
`;
