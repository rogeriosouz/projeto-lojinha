import styled from 'styled-components';
import * as cores from '../../config/colors';


export const Container = styled.div`
  width: 200px;
  height: 308px;
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
`;

export const Img = styled.div`
  width: 100%;
  height: 60%;
  padding-top: 5px;
  background-color: ${cores.whiteColor};
  border-bottom: 1px solid #0000001f;
`;

export const Button = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: flex-end;
  justify-content: center;

  button {
    width: 100%;
    height: 30px;
    border: 0;
    background-color: ${cores.primaryColor};
    color: ${cores.whiteColor};

    :hover {
      color:  ${cores.primaryDarkColor};
    }
  }
`;


export const Price = styled.div`
  width: 100%;
  padding-left: 10px;

  p {
    color: green;
  }
`;