import styled from 'styled-components';

export const StyledFeaturedDetails = styled.div`
	writing-mode: vertical-rl;
	transform-origin: 50% 50%;
	transform: scale(-1);
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	bottom: 0;
	left: 0;
	text-align: center;
	font-size: 1.8rem;
	font-weight: ${({ theme }) => theme.weights.semiBold};
	line-height: 1;
	width: 4rem;
	padding: 0.5rem;
`;
