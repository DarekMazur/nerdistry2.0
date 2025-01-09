import styled from 'styled-components';

export const CategoryFilters = styled.div`
	position: fixed;
	background-color: darkgray;
	top: 10vh;
	left: 100%;
	padding-right: 3rem;
	opacity: ${({ $hidden }) => ($hidden ? '0' : '1')};
	transform: ${({ $open }) => ($open ? 'translateX(-100%)' : 'translateX(0)')};
	transition:
		transform 0.1s ease-in-out,
		opacity 0.3s ease-in-out;
	z-index: 100;

	ul {
		list-style: none;
		padding: 1rem;

		li {
			white-space: nowrap;
		}
	}
`;
