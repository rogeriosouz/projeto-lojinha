import styled from 'styled-components';
import * as cores from '../../config/colors';

export const HeaderCabecalho = styled.header`
  width: 100%;
  height: 50px;
  background-color: ${cores.primaryColor};
  position: fixed;
  top: 0;
  border-bottom: 1px solid ${cores.detalsColor};
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

export const Linka = styled.a`
  display: flex;
  align-items: center;
  justify-content:center;
  :hover {
    border-bottom: 2px solid ${cores.detalsColor};
  }
  color: ${cores.whiteColor};
  border-bottom: 2px solid transparent;
  transition: all 0.3s linear;
  width: 100%;
  height: 100%;
  text-align: center;
`;