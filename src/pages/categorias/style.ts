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
          border-radius: 3px;
          height: 30px;
          border: 1px solid ${cores.primaryColor};
          width: 300px;
          color: ${cores.primaryColor};
        }
      }
    }

    tbody {
      tr {
        td {
          border-radius: 3px;
          border: 1px solid ${cores.primaryColor};
          max-width: 300px;
          color: ${cores.primaryColor};
          display: block;
          margin-bottom: 5px;
          padding: 2px;
          position: relative;

          div {
            cursor: pointer;
            position: absolute;
            top: 20%;
            left: 85%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }
    }

    tfoot {
     height: 50px;
     width: 100%;
      tr {
        border-radius: 3px;
        width: 100%;
        height: 100%;
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
    color: ${cores.primaryColor};
    border: 1px solid ${cores.primaryColor};

    :hover {
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


export const Delete = styled.a`
  margin-left: 20px;
`;