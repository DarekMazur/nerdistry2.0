import styled from 'styled-components';

export const StyledWrapper = styled.div`
	margin: 0 auto;
	width: ${({ $wide }) => ($wide ? '100vw' : '90%')};
	max-width: ${({ $wide }) => ($wide ? 'unset' : '150rem')};
	overflow-x: hidden;
`;
