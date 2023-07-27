import styled from 'styled-components';

export const StyledWrapper = styled.div`
	margin: 1rem auto;
	width: ${({ $wide }) => ($wide ? '100vw' : '90%')};
	max-width: ${({ $wide }) => ($wide ? 'unset' : '150rem')};
`;
