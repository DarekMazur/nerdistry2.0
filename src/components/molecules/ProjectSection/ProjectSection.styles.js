import styled from 'styled-components';

export const ProjectSection = styled.div`
	font-size: ${({ theme }) => theme.fontSize.mobile.m};
  position: relative;
	display: block;
  width: 100vw;
  padding: 0 2.5rem 0 3rem;
  flex-direction: column;
  justify-content: center;
  align-items: ${({ $detail }) => ($detail ? 'flex-start' : 'center')};
  border-left: 0;
  cursor: ${({ $curtain }) => ($curtain ? 'pointer' : 'inherit')};

  &:nth-of-type(1) {
    display: block;
  }

  &:nth-of-type(3) {
    padding: 3rem 1rem;
  }
	
	h3 {
    color: ${({ theme }) => theme.colors.lightBlue};
    font-size: ${({ theme }) => theme.fontSize.mobile.lm};
    padding: 0;
    margin: 0;
	}

  p {
    margin: 1.6rem 0;
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
	  min-height: ${({ $heightRef }) => `${$heightRef}px`};
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
  }
	
  &:after {
	  content: '';
	  background-color: ${({ theme, $curtain, $dark }) =>
			$curtain
				? $dark
					? theme.colors.black
					: theme.colors.white
				: 'transparent'};
    min-height: ${({ $heightRef }) => `${$heightRef}px`};
	  position: absolute;
	  width: 100%;
	  height: 100%;
	  top:0;
	  left: 0;
	  opacity: 0.7;
  }
	
	
  @media (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
	  display: flex;
    font-size: ${({ theme }) => theme.fontSize.tablet.m};
	  width: 50vw;
    align-items: ${({ $curtain }) => ($curtain ? `flex-end` : 'flex-start')};
    min-height: 50rem;
    position: relative;
    padding: 0 2.5rem 0 3rem;
    flex-direction: column;
    justify-content: center;

    button {
      display: block;
    }
	  
    p {
      margin: 1.6rem 0;
    }

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
    }

    &:nth-of-type(1) {
      display: flex;
    }

    &:nth-of-type(3) {
      padding: 3rem;
    }
    
    &:after {
	    display: none
    }
	  
    h3 {
      font-size: ${({ theme }) => theme.fontSize.tablet.l};
    }
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    font-size: ${({ theme }) => theme.fontSize.desktop.m};
    width: 50vw;
    display: flex;
    min-height: 40rem;
    border-left: ${({ theme, $curtain }) =>
			$curtain ? `1rem solid ${theme.colors.lightBlue}` : '0'};
	  
    h3 {
      font-size: ${({ theme }) => theme.fontSize.desktop.l};
    }
`;
