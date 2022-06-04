import styled from 'styled-components';
import * as cores from '../../config/colors';

export const SecaoCadastrarCategoria = styled.section`
  width: 100%;
  min-height: 100vh;
  margin-top: 50px;
`;

export const Conteudo = styled.div`
  margin: auto;
  max-width: 700px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  position: relative;
  width: 400px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  background-color: ${cores.primaryColor};
  border-radius: 2px;
  @media (max-width: 460px) {
    padding: 10px;
    border-radius: 0px;
    div {
      label {
        font-size: 1em;
      }
      input {
        font-size: 1em;
      }
    }
  }
`;


export const VoltarLink = styled.div`
  position: absolute;
  top: 4px;
  left: 4px;
  a {

    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
`;