import styled from 'styled-components';

export const StyledWrapper = styled.div`
	margin: 1rem auto;
	width: ${({ isWide }) => (isWide ? '100vw' : '90%')};
	max-width: ${({ isWide }) => (isWide ? 'unset' : '150rem')};
`;
