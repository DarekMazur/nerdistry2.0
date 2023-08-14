import styled from 'styled-components';

export const StyledButton = styled.button`
	display: block;
	color: ${({ theme }) => theme.colors.black};
	text-decoration: none;
	background-color: ${({ theme }) => theme.colors.white};
	width: 20rem;
	height: 5rem;
	border: 0.2rem solid black;
	cursor: pointer;
	position: relative;
	overflow: hidden;
	z-index: 1;

	&:visited,
	&:active {
		color: ${({ theme }) => theme.colors.black};
	}

	span {
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
		transition: transform 0.1s ease-in-out;

		&:nth-child(1) {
			transform: translateY(
				${({ $mouesOver }) => ($mouesOver ? '-100%' : '0')}
			);
		}

		&:nth-child(2) {
			transform: translateY(${({ $mouesOver }) => ($mouesOver ? '0' : '100%')});
		}
	}
`;
