import styled from 'styled-components';

export const StyledTechList = styled.p`
	span {
		&:after {
			content: ', ';
		}

		&:last-of-type {
			&:after {
				content: '';
			}
		}
	}
`;
