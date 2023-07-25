import styled from 'styled-components';

export const StyledPostExcCover = styled.div`
	width: 15rem;
	height: 15rem;
	border-radius: 50%;
	overflow: hidden;
	margin-bottom: 1rem;

	img {
		width: 15rem;
		height: 15rem;
		object-fit: cover;
		transform-origin: center;
		transition: transform 0.3s ease-in-out;
	}
`;
