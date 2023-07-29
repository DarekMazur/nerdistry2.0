import styled from 'styled-components';

export const StyledPostCoverWrapper = styled.div`
	position: relative;
	width: 100vw;
	height: 38rem;

	img:first-of-type {
		height: 38rem;
		width: 100vw;
		object-fit: cover;
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
		height: 49rem;

		img:first-of-type {
			height: 49rem;
		}
	}

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
		height: 67rem;

		img:first-of-type {
			height: 67rem;
		}
	}
`;
