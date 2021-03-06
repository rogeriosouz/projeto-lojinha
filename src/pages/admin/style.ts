import styled from 'styled-components';
import * as cores from '../../config/colors';

export const SecaoAdmin = styled.section`
  width: 100%;
  height: 100vh;
  margin-top: 50px;
`;

export const Conteudo = styled.div`
  margin: auto;
  max-width: 700px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  width: 400px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  background-color: ${cores.whiteColor};
  box-shadow: 1px 1px 20px 0px #0000004f;
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