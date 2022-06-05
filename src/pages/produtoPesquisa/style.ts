import styled from 'styled-components';

export const PesquisaProdutoSection = styled.section`
  width: 100%;
  min-height: 100vh;
  margin-top: 50px; 
  background-color: #dfdfdf;
  padding-bottom: 40px;
`;


export const Conteudo = styled.div`
  max-width: 600px;
  display: grid;
  padding-top: 20px;
  grid-template-columns: 1fr 1fr 1fr;
  margin: auto;
  gap: 10px;

  padding: 10px;

  @media (max-width: 648px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 437px) {
    grid-template-columns: 1fr;
  }
`;