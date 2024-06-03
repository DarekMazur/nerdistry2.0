import styled from 'styled-components';

export const StyledMainAbout = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 0 0 2rem;

	svg,
	img {
		width: 10rem;
		height: 10rem;
		border-radius: 50%;
		border: ${({ theme, $dark }) =>
			$dark
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

export const AboutDefaultCover = styled.img`
	width: 100% !important;
	height: auto !important;
	border: none !important;
	border-radius: 0 !important;
`;
