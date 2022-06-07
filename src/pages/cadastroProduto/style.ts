import styled from 'styled-components';

import * as cores from '../../config/colors';

export const SecaoCadastroProduc = styled.section`
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
  position: relative;
  width: 500px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 10px;
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

export const TextArea = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 20px;

  textarea {
    width: 100%;
    height: 90px;
    border: none;
    font-size: 1.3em;
    padding: 5px;
    border-radius: 3px;
    border: 1px solid ${cores.primaryColor};
    
    :hover {
      border: 1px solid ${cores.primaryDarkColor};
    }
    resize: none;
  }

  label {
    display: block;
    font-size: 1.3em;
    margin-bottom: 4px;
    color: ${cores.primaryColor};
  }
`;

export const VoltarLink = styled.div`
  position: absolute;
  top: 4px;
  left: 4px;
`;


export const OpcaoInput = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
  label {
      display: block;
      font-size: 1.3em;
      margin-bottom: 4px;
      color: ${cores.primaryColor};
    }

  select {
    width: 100%;
    height: 25px;
    font-size: 1.2em;
    cursor: pointer;
    border: 1px solid ${cores.primaryColor};
    
    :hover {
      border: 1px solid ${cores.primaryDarkColor};
    }
    border-radius: 3px;


    color: ${cores.primaryColor}

  }
`;


export const NamePrice = styled.div`
  display: flex;
  width: 100%;
  gap: 5px;

  @media (max-width: 330px) {
    flex-direction: column;
  }
`;