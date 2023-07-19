import styled from 'styled-components';

export const StyledMenuListItem = styled.li`
  a {
    color: ${({ theme }) => theme.colors.white};
    transition: color 0.3s ease-in-out;
    
    &:hover {
      color: ${({ theme }) => theme.colors.darkBlue};
    }  

    p,
    h4 {
      padding: 0;
      margin: 0;
      text-align: left;
    }

    p {
      font-size: ${({ theme }) => theme.fontSize.mobile.s};

      &:last-of-type {
        font-family: ${({ theme }) => theme.fonts.mainFont};
      }
    }

    h4 {
      font-size: ${({ theme }) => theme.fontSize.mobile.lm};
    }
  }
}
`;
