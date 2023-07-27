import styled from 'styled-components';

export const StyledSingleProject = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 0 auto 4rem;
	color: ${({ $dark, theme }) =>
		$dark ? theme.colors.white : theme.colors.black};

	h3 {
		font-size: ${({ theme }) => theme.fontSize.mobile.l};
		font-weight: ${({ theme }) => theme.weights.semiBold};
		margin: 0.5rem 0;
		color: ${({ $dark, theme }) =>
			$dark ? theme.colors.white : theme.colors.black};
	}

	img {
		width: 100%;
		height: 25.5rem;
		object-fit: cover;
		transition: transform 0.2s ease-in-out;
	}

	div {
		&:first-of-type {
			height: 25.5rem;
			margin-bottom: 1rem;
			overflow: hidden;
			transition: transform 0.2s ease-in-out;

			&:hover {
				transform-origin: center;
				transform: scale(0.9);

				img {
					transform: scale(1.2);
				}
			}
		}
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
		img {
			height: 53rem;
		}
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
		img {
			height: 25.5rem;
		}
	}
`;
