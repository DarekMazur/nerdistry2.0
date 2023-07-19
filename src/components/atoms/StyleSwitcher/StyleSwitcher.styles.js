import styled from 'styled-components';

export const StyledStyleSwitcher = styled.div`
  height: 3.5rem;
  width: 10rem;
  border-radius: 1.75rem;
  background-color: ${({ theme, isDark }) =>
		isDark ? theme.colors.white : theme.colors.black};
  position: relative;
  
    svg {
      height: 3rem;
      position: absolute;
      top: 0.25rem;

    path {
      stroke: ${({ theme, isDark }) =>
				isDark ? theme.colors.black : theme.colors.white};
      fill: ${({ theme, isDark }) =>
				isDark ? theme.colors.black : theme.colors.white};
      transform-origin: 50% 50%;
    }
    
      &:nth-of-type(1) {
        opacity: ${({ isDark }) => (isDark ? `0` : `1`)};
        left: 0.25rem;
      }
    
      &:nth-of-type(2) {
        opacity: ${({ isDark }) => (isDark ? `1` : `0`)};
        left: calc(100% - 32.5px);
      }
    }
  }
`;
