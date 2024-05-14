import styled from 'styled-components';

export const StyledPostContent = styled.div`
	font-size: ${({ theme }) => theme.fontSize.mobile.m};
	margin: 2rem;

	img {
		width: 100%;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
		font-size: ${({ theme }) => theme.fontSize.tablet.m};
		margin: 6rem;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
		margin: 13rem;
	}
`;
