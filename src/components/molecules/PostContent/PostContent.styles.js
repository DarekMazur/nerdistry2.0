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
		position: relative;
		padding: 3rem;

		&::before {
			content: 'Code';
			position: absolute;
			top: 0.5rem;
			right: 0.5rem;
			color: ${({ theme }) => theme.colors.green};
		}
	}

	pre[class*='language-javascript'] {
		&::before {
			content: 'JavaScript';
		}
	}

	pre[class*='language-typescript'] {
		&::before {
			content: 'TypeScript';
		}
	}

	pre[class*='language-html'] {
		&::before {
			content: 'HTML';
		}
	}

	pre[class*='language-css'] {
		&::before {
			content: 'CSS';
		}
	}

	pre[class*='language-json'] {
		&::before {
			content: 'JSON';
		}
	}

	pre[class*='language-typescript'] {
		&::before {
			content: 'TypeScript';
		}
	}

	pre[class*='language-bash'] {
		&::before {
			content: 'Bash';
		}
	}

	pre[class*='language-docker'] {
		&::before {
			content: 'Docker';
		}
	}

	pre[class*='language-graphql'] {
		&::before {
			content: 'GraphQL';
		}
	}

	pre[class*='language-jsx'] {
		&::before {
			content: 'React JSX';
		}
	}

	pre[class*='language-tsx'] {
		&::before {
			content: 'React TSX';
		}
	}

	pre[class*='language-regex'] {
		&::before {
			content: 'Regex';
		}
	}

	pre[class*='language-scss'] {
		&::before {
			content: 'SCSS';
		}
	}

	pre[class*='language-sass'] {
		&::before {
			content: 'Sass';
		}
	}

	pre[class*='language-sql'] {
		&::before {
			content: 'SQL';
		}
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
		font-size: ${({ theme }) => theme.fontSize.tablet.m};
		margin: 6rem;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
		margin: 13rem;
	}
`;
