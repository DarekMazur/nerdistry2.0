import styled from 'styled-components';

export const StyledMainAbout = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	svg,
	img {
		width: 10rem;
		height: 10rem;
		border-radius: 50%;
		border: ${({ theme, isDark }) =>
			isDark
				? `0.3rem solid ${theme.colors.white}`
				: `0.3rem solid ${theme.colors.black}`};
	}

	img {
		padding: 0.4rem;
	}

	p {
		text-align: center;
		font-size: 1.6rem;
	}
`;
