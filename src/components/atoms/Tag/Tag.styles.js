import styled from 'styled-components';

export const StyledTag = styled.span`
	font-size: ${({ theme }) => theme.fontSize.mobile.lm};
	color: ${({ theme, $dark }) =>
		$dark ? theme.colors.darkBlue : theme.colors.lightBlue};
	margin-right: 0.5rem;

	&:last-of-type {
		margin-right: 0;

		&:after {
			content: '';
		}
	}

	&:after {
		content: ',';
	}
`;
