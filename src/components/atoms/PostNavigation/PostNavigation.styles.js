import styled from 'styled-components';

export const StyledPostNavigation = styled.div`
	padding: 0 2rem;
	width: 100%;
	display: flex;
	justify-content: ${({ $prev }) => ($prev ? 'space-between' : 'flex-end')};
	font-size: ${({ theme }) => theme.fontSize.mobile.m};
	font-weight: ${({ theme }) => theme.weights.semiBold};

	a {
		margin: 2rem;
		display: flex;
		align-items: center;
		text-decoration: none;
		color: ${({ theme, $dark }) =>
			$dark ? theme.colors.white : theme.colors.black};

		&:first-of-type {
			&:hover {
				svg {
					transform: translateX(-2rem);
				}
			}
		}

		&:last-of-type {
			&:hover {
				svg {
					transform: translateX(2rem);
				}
			}
		}
	}

	svg {
		margin: 0 2rem;
		height: 2rem;
		transition: transform 0.3s ease-in-out;

		path {
			fill: ${({ theme, $dark }) =>
				$dark ? theme.colors.white : theme.colors.black};
		}
	}
`;
