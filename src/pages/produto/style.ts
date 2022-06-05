import styled from 'styled-components';

import * as cores from '../../config/colors';

export const SecaoProduto = styled.section`
  width: 100%;
  min-height: 100vh;
  margin-top: 50px;
  background: #dfdfdf;
`;

export const Conteudo = styled.div`
  max-width: 700px;
  min-height: 100vh;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    max-width: 350px;
    height: 450px;
    background-color: ${cores.whiteColor};
    text-align:center;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const ConteudoNameDescricao = styled.div`
  width: 100%;
  h2 {
    color: ${cores.primaryDarkColor}; 
  }

  p {
    color: ${cores.primaryDarkColor}; 
  }

`;

export const Dinhero = styled.div` 
  width: 100%;
  p {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: ${cores.primaryDarkColor};
    padding-left: 20px;
  }
`;

export const ImgConfig = styled.div`
  background-color: #dfdfdf;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;