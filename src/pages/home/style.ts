import styled from 'styled-components';

export const HomeSection = styled.section`
  width: 100%;
  min-height: 100vh;
  margin-top: 50px; 
  background-color: #dfdfdf;
  padding-bottom: 40px;
`;


export const Conteudo = styled.div`
  max-width: 700px;
  display: grid;
  padding-top: 20px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  margin: auto;
  gap: 10px 30px;

  padding: 10px;

  @media (max-width: 518px) {
    grid-template-columns: 1fr;
  }
`;


