import styled from 'styled-components';

export const StyledHeaderWrapper = styled.div`
	padding: 2rem;

	div {
		display: flex;
		flex-direction: ${({ position }) => (position ? 'row' : 'column')};
		justify-content: ${({ position }) =>
			position ? 'space-between' : 'center'};
		align-items: ${({ position }) => (position ? 'flex-start' : 'center')};
		color: ${({ theme }) => theme.colors.white};
		font-size: ${({ theme }) => theme.fontSize.mobile.xl};
		text-align: center;
		line-height: 1;
	}

	p {
		text-align: center;
		font-size: ${({ theme }) => theme.fontSize.mobile.l};
		line-height: 1.2;
	}
`;
