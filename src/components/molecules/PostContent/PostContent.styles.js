import styled from 'styled-components';

export const StyledPostContent = styled.div`
	font-size: ${({ theme }) => theme.fontSize.mobile.m};
	margin: 2rem;

	a {
		color: ${({ theme }) => theme.colors.lightBlue};
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}

	img {
		width: 100%;
	}

	pre[class*='language-'] {
		padding: 3rem;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
		font-size: ${({ theme }) => theme.fontSize.tablet.m};
		margin: 6rem;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
		margin: 13rem;
	}
`;
