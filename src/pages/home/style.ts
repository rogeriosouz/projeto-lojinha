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


export const ImgHome = styled.div`
  width: 100%;
  height: 30vh;
  background-image: url('https://img.terabyteshop.com.br/banner/1723.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 50px;
`;


export const Categorias = styled.div`
  width: 100%;
  background-color: #fff;
  height: 50px;

  div {
    max-width: 700px;
    height: 100%;
    margin: auto;

    display: flex;
    align-items: center;
    justify-content: center;

  }
`;