import styled from 'styled-components';

export const StyledSingleFeaturePost = styled.div`
	min-height: 28.5rem;
	width: 100%;
	background: ${({ cover }) =>
		cover ? `url(${cover}) center/cover no-repeat` : `unset`};
	color: ${({ theme }) => theme.colors.white};
	position: relative;
	overflow: hidden;

	& > a {
		background-color: ${({ theme }) => `${theme.colors.black}cc`};
		color: inherit;
		text-decoration: none;
		width: 100%;
		min-height: 28.5rem;
		height: 100%;
		padding: 3rem 5rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		position: relative;

		&:hover {
			p {
				transform: translateY(2rem);

				&:last-of-type {
					transform: translateY(3rem);
				}
			}
		}

		h3 {
			font-size: ${({ theme }) => theme.fontSize.mobile.xxl};
			text-align: center;
			font-weight: ${({ theme }) => theme.weights.semiBold};
			margin: 0 auto;
		}

		p {
			margin: 2rem 0;
			line-height: 1.5;
			transition: transform 0.3s ease-in-out;
		}

		a {
			color: ${({ theme }) => theme.colors.white};
		}

		svg {
			path {
				fill: ${({ theme }) => theme.colors.white};
			}
		}
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
		min-height: 69rem;

		& > a {
			min-height: 69rem;
			width: 50%;
		}
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
		& > a {
			width: 60%;
		}
	}
`;
