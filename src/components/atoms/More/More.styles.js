import styled from 'styled-components';

export const StyledMore = styled.div`
	display: flex;
	align-items: center;
	justify-content: ${({ $justify }) => $justify};
	margin: ${({ $margin }) => $margin};
	padding: ${({ $padding }) => $padding};
	cursor: pointer;
	line-height: 1.1;
	text-decoration: none;
	color: ${({ theme, $dark }) =>
		$dark ? theme.colors.white : theme.colors.black};

	position: ${({ $absolute }) => ($absolute ? 'absolute' : 'inherit')};
	bottom: ${({ $absolute }) => ($absolute ? '2rem' : 'unset')};
	left: ${({ $absolute }) => ($absolute ? '50%' : 'unset')};
	opacity: ${({ $absolute, $hover }) =>
		$absolute ? ($hover ? '1' : '0') : 'unset'};
	transform: ${({ $absolute, $hover }) =>
		$absolute
			? $hover
				? 'translate(-50%, 0)'
				: 'translate(-50%, 6rem)'
			: 'unset'};
	transition: ${({ $absolute }) =>
		$absolute
			? 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out;'
			: 'unset'};

	a,
	div {
		display: flex;
		align-items: center;
		justify-content: center;
		color: ${({ theme }) => theme.colors.white};
		text-decoration: none;
		width: fit-content;

		&:hover {
			span {
				transform: translateX(-0.8rem);
			}

			svg {
				transform: translateX(0.8rem);
			}
		}
	}

	span {
		font-size: ${({ theme }) => theme.fontSize.mobile.m};
		font-weight: ${({ theme }) => theme.weights.semiBold};
		margin-right: 1rem;
		transition: transform 0.3s ease-in-out;
	}

	svg {
		transition: transform 0.3s ease-in-out;
		path {
			fill: ${({ theme, $dark }) =>
				$dark ? theme.colors.white : theme.colors.black};
		}
	}
`;
