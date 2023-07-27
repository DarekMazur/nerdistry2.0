import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: ${({ $justify }) => $justify};
	margin: ${({ $margin }) => $margin};
	padding: ${({ $padding }) => $padding};
	line-height: 1.1;
	text-decoration: none;
	color: ${({ theme, $dark, $color }) =>
		$color
			? theme.colors[$color]
			: $dark
			? theme.colors.white
			: theme.colors.black};
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
`;
