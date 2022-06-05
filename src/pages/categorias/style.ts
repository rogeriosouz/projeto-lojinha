import styled from 'styled-components';
import * as cores from '../../config/colors';

export const SecaoCategorias = styled.section`
  width: 100%;
  min-height: 100vh;
  background-color: #dfdfdf;
`;

export const Conteudo = styled.div`
  max-width: 700px;
  min-height: 100vh;
  margin: auto;

  display: flex;
  justify-content:center;
  align-items: center;
`;

export const Table = styled.table`
    background-color: ${cores.whiteColor};
    border-radius: 3px;
    position: relative;
    padding: 40px;

    thead {
      tr {
        th {
          height: 30px;
          border: 1px solid #000;
          width: 300px;
          color: ${cores.primaryDarkColor}; 
        }
      }
    }

    tbody {
      tr {
        td {
          border: 1px solid #000;
          max-width: 300px;
          color: ${cores.primaryDarkColor};
          display: block;
          margin-bottom: 5px;
          padding: 2px;
        }
      }
    }

    tfoot {
     height: 50px;
     width: 100%;
      tr {
        width: 100%;
        height: 100%;

        td {
          
        }
      }
    }

`;

export const LinkButtonTable = styled.td`
  width: 200px;
  margin-right: 10px;

  a {
    padding: 4px 30px;
    border-radius: 1px;

    transition: all 0.2s linear;

    height: 25px;
    background-color: ${cores.whiteColor};
    color: ${cores.primaryDarkColor};
    border: 1px solid ${cores.primaryDarkColor};

    :hover {
      border: 1px solid ${cores.primaryDarkColor};
      background-color: ${cores.primaryColor};
      color: ${cores.whiteColor};
      box-shadow: 1px 1px 7px 2px #00000052;
    }
  }
`; 

export const ImgLink = styled.td`
  position: absolute;
  top: 4px;
  left: 4px;
  cursor: pointer;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;