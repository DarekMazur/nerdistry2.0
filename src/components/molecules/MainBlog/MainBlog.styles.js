import styled from 'styled-components';

export const StyledMainBlog = styled.div`
	display: flex;
	flex-direction: column;

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
		display: grid;
		grid-template-rows: 1fr 1fr;
		grid-template-columns: 1fr 1fr;
		align-items: stretch;

		// div:last-of-type, p:last-of-type {
		// 	font-size: ${({ theme }) => theme.fontSize.mobile.lm};
		//   grid-column: span 2;
		//   justify-self: center;
		//   text-align: center;
		// }
	}
`;
