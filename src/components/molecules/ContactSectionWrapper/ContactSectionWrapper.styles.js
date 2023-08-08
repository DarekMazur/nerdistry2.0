import styled from 'styled-components';

export const StyledContactSectionWrapper = styled.div`
	min-height: 40rem;
	padding: 0 3rem 5.2rem;
	margin: 0 3rem;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	font-size: ${({ theme }) => theme.fontSize.mobile.m};

	p {
		color: ${({ theme, $dark }) =>
			$dark ? theme.colors.lightBlue : theme.colors.lightBlue};
	}

	ul {
		list-style: none;
		display: flex;
		margin: 0;
		padding: 0;

		li {
			padding: 0 1rem;
		}

		svg {
			path {
				fill: ${({ theme, $dark }) =>
					$dark ? theme.colors.white : theme.colors.black};
			}
		}
	}
`;
