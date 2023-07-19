import styled from 'styled-components';

export const StyledStyleSwitcher = styled.div`
  height: 35px;
  width: 100px;
  border-radius: 17.5px;
  background-color: ${({ theme, isDark }) =>
		isDark ? theme.colors.white : theme.colors.black};
  position: relative;
  
    svg {
      height: 30px;
      position: absolute;
      top: 2.5px;

    path {
      stroke: ${({ theme, isDark }) =>
				isDark ? theme.colors.black : theme.colors.white};
      fill: ${({ theme, isDark }) =>
				isDark ? theme.colors.black : theme.colors.white};
      transform-origin: 50% 50%;
    }
    
      &:nth-of-type(1) {
        opacity: ${({ isDark }) => (isDark ? `0` : `1`)};
        left: 2.5px;
      }
    
      &:nth-of-type(2) {
        opacity: ${({ isDark }) => (isDark ? `1` : `0`)};
        left: calc(100% - 32.5px);
      }
    }
  }
`;
