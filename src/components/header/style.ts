import styled from 'styled-components';
import * as cores from '../../config/colors';

export const HeaderCabecalho = styled.header`
  width: 100%;
  height: 50px;
  background-color: ${cores.primaryColor};
  position: fixed;
  top: 0;
  box-shadow: 0px 0px 4px 1px #00000063;
  z-index: 3;
`;

export const Conteudo = styled.div`
  width: 70%;
  height:100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;

  h2 {
    color: ${cores.whiteColor};
  }

  nav {
    width: 50px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 35px;
      border-radius: 50%;
      object-fit: cover;
      border:  2px solid ${cores.whiteColor};
      :hover {
        border:  2px solid ${cores.primaryDarkColor};
      }
      transition: all 0.2s linear;
    }
  }
`;

export const LinkLogin = styled.div`
  transition: all 0.1s linear;
  a {
    color: ${cores.whiteColor};
    width: 100%;
    height: 100%;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  :hover {
    border-bottom: 2px solid #f00;
  }
  
  height: 100%;
  border-bottom: 2px solid ${cores.primaryColor};
  
`;