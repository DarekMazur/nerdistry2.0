import styled from 'styled-components';
import { Link } from 'gatsby';

export const StyledMore = styled(Link)`
	display: flex;
	align-items: center;
	justify-items: flex-end;
	color: inherit;
	text-decoration: none;
	width: fit-content;
	cursor: pointer;
	padding-right: 1rem;

	&:hover {
		span {
			transform: translateX(-0.8rem);
		}

		svg {
			transform: translateX(0.8rem);
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
