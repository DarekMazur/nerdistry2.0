import styled from 'styled-components';

export const StyledContactCover = styled.div`
	display: none;
	width: 100%;
	height: 68rem;
	background: ${({ $coverImage }) =>
		`url("${$coverImage}") center/cover no-repeat`};
	margin: 0;
	padding: 0;

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
		display: flex;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
		width: 50%;
		margin: 1.3rem 0 0;
	}
`;
