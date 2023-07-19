import styled from 'styled-components';

export const StyledStyleSwitcher = styled.button`
  height: 3.5rem;
  width: 10rem;
  border-radius: 1.75rem;
  border: none;
  cursor: pointer;
  background-color: ${({ theme, isDark }) =>
		isDark ? theme.colors.white : theme.colors.black};
  position: relative;
  transition: background-color 0.5s ease-in-out;
  
    svg {
      height: 3rem;
      position: absolute;
      top: 0.25rem;
	  transition: all 0.5s ease-in-out;

    path {
      stroke: ${({ theme, isDark }) =>
				isDark ? theme.colors.black : theme.colors.white};
      fill: ${({ theme, isDark }) =>
				isDark ? theme.colors.black : theme.colors.white};
      transform-origin: 50% 50%;
    }
    
	  &:nth-of-type(1) {
		opacity: ${({ isDark }) => (isDark ? `0` : `1`)};
		left: ${({ isDark }) => (isDark ? `calc(100% - 32.5px)` : `0.25rem`)};
		transform: ${({ isDark }) => (isDark ? `rotate(180deg)` : `rotate(0)`)};
	  }
    
      &:nth-of-type(2) {
        opacity: ${({ isDark }) => (isDark ? `1` : `0`)};
        left: ${({ isDark }) => (isDark ? `0.25rem` : `calc(100% - 32.5px)`)};
		transform: ${({ isDark }) => (isDark ? `rotate(0)` : `rotate(180deg)`)};
      }
    }
  }
`;
