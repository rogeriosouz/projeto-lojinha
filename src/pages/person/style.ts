import styled from 'styled-components';
import * as cores from '../../config/colors';

export const PrsonSecao = styled.section`
  width: 100%;
  min-height: 100vh;
  margin-top: 50px;
`;

export const Conteudo = styled.div`
  max-width: 700px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;

  div {
    width: 400px;
    height: 300px;
    padding: 10px;
    background-color: ${cores.whiteColor};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
      color: ${cores.primaryColor};
    }

    img {
      width: 40%;
      border-radius: 50%;
      margin-bottom: 20px;
    }

    div {
      width: 300px;
      height: 65px;
    }
  }

`;