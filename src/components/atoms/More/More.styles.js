import styled from 'styled-components';

export const StyledMore = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	position: ${({ isAbsolute }) => (isAbsolute ? 'absolute' : 'inherit')};
	bottom: ${({ isAbsolute }) => (isAbsolute ? '2rem' : 'unset')};
	left: ${({ isAbsolute }) => (isAbsolute ? '50%' : 'unset')};
	opacity: ${({ isAbsolute, isHover }) =>
		isAbsolute ? (isHover ? '1' : '0') : 'unset'};
	transform: ${({ isAbsolute, isHover }) =>
		isAbsolute
			? isHover
				? 'translate(-50%, 0)'
				: 'translate(-50%, 6rem)'
			: 'unset'};
	transition: ${({ isAbsolute }) =>
		isAbsolute
			? 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out;'
			: 'unset'};

	span {
		font-size: ${({ theme }) => theme.fontSize.mobile.m};
		font-weight: ${({ theme }) => theme.weights.semiBold};
		margin-right: 1rem;
		transition: transform 0.3s ease-in-out;
	}

	svg {
		transition: transform 0.3s ease-in-out;
		path {
			fill: ${({ theme, isDark }) =>
				isDark ? theme.colors.white : theme.colors.black};
		}
	}

	&:hover {
		span {
			transform: translateX(-0.8rem);
		}

		svg {
			transform: translateX(0.8rem);
		}
	}
`;
