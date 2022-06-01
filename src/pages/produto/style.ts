import styled from 'styled-components';

import * as cores from '../../config/colors';

export const SecaoProduto = styled.section`
  width: 100%;
  min-height: 100vh;
  margin-top: 50px;
`;

export const Conteudo = styled.div`
  max-width: 700px;
  min-height: 100vh;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    width: 300px;
    height: 350px;
    background-color: ${cores.primaryColor};
    text-align:center;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const ConteudoNameDescricao = styled.div`

  h2 {
    color: ${cores.whiteColor}; 
  }

  p {
    color: ${cores.whiteColor}; 
  }

`;

export const Dinhero = styled.div` 
  p {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: ${cores.seccessColor};
    padding-left: 20px;
  }
`;

export const ImgConfig = styled.div`
  background-color: #dfdfdf;

  p {
    color: ${cores.whiteColor}; 
  }
`;