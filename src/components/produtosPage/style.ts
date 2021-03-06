import styled from 'styled-components';
import * as cores from '../../config/colors';

export const Container = styled.div`
  max-width: 250px;
  min-width: 230px;
  height: 408px;
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: center;
  background-color: ${cores.whiteColor};
  margin-bottom: 20px;
  margin-top: 40px;
`;


export const Conteudo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  p {
    color: ${cores.primaryColor};
  }
  :hover {
    div {
      button {
        display: block;
      }
    }
  }
  
`;

export const Img = styled.div`
  width: 100%;
  height: 80%;
  background-color: ${cores.whiteColor};

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    margin-bottom: 10px;
  }
`;

export const Button = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  

  button {
    display: none;
    width: 100%;
    height: 30px;
    border: 0;
    background-color: ${cores.primaryColor};
    color: ${cores.whiteColor};

    :hover {
      color: ${cores.primaryDarkColor};
    }
  }
`;


export const Price = styled.div`
  width: 100%;
  padding-left: 10px;

  p {
    color: ${cores.primaryColor};
  }
`;