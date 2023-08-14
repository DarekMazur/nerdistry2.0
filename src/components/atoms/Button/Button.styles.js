import styled from 'styled-components';

export const StyledButton = styled.button`
	min-width: 20rem;
	max-width: 40rem;
	height: 4rem;
	border: ${({ theme, $dark }) =>
		$dark
			? `${theme.colors.white} solid .3rem`
			: `${theme.colors.black} solid .3rem`};
	background-color: transparent;
	color: ${({ theme, $dark }) =>
		$dark ? theme.colors.white : theme.colors.black};
	font-size: ${({ theme }) => theme.fontSize.mobile.l};
	font-weight: ${({ theme }) => theme.weights.bold};
	margin: 3rem 1rem;
	padding: 2rem;
	position: relative;
	overflow: hidden;

	span {
		position: absolute;
		display: flex;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		justify-content: center;
		align-items: center;
		color: ${({ theme, $dark }) =>
			$dark ? theme.colors.white : theme.colors.black};
		background-color: ${({ theme, $dark }) =>
			$dark ? theme.colors.black : theme.colors.white};
		transition: transform 400ms ease-in-out;

		&:nth-child(1) {
			transform: translateY(
				${({ $loading, $success }) => {
					if ($loading) return `-100%`;
					if ($success) return `-100%`;
					return `0%`;
				}}
			);
		}

		&:nth-child(2) {
			transform: translateY(
				${({ $loading, $success }) => {
					if ($loading) return `0%`;
					if ($success) return `-100%`;
					return `100%`;
				}}
			);
		}

		&:nth-child(3) {
			transform: translateY(
				${({ $loading, $success }) => {
					if ($loading) return `100%`;
					if ($success) return `0%`;
					return `200%`;
				}}
			);
		}
	}
`;
