import styled from 'styled-components';
import * as cores from '../../config/colors';

export const SecaoCategorias = styled.section`
  width: 100%;
  height: 100vh;
  margin-top: 50px;
`;

export const Conteudo = styled.div`
  max-width: 700px;
  height: 100vh;
  margin: auto;

  display: flex;
  justify-content:center;
  align-items: center;
`;

export const Table = styled.table`
    background-color: ${cores.primaryColor};
    position: relative;

    padding: 40px ;

    thead {
      tr {
        th {
          height: 30px;
          border: 1px solid #000;
          width: 300px;
          color: ${cores.whiteColor}; 
        }
      }
    }

    tbody {
      tr {
        td {
          border: 1px solid #000;
          width: 300px;
          color: ${cores.whiteColor};
          display: block;
          margin-bottom: 5px;
          padding: 2px;
        }
      }
    }

    tfoot {
      tr {
        td {
          width: 300px;
          color: ${cores.whiteColor};
          padding: 10px 0px;
          margin-right: 10px;

          a {
            padding: 4px 30px;
            border-radius: 1px;

            transition: all 0.2s linear;

            height: 25px;
            background-color: ${cores.whiteColor};
            color: ${cores.primaryColor};
            border: 1px solid ${cores.primaryDarkColor};

            :hover {
              border: 1px solid ${cores.primaryDarkColor};
              background-color: ${cores.primaryColor};
              color: ${cores.whiteColor};
              box-shadow: 1px 1px 7px 2px #00000052;
            }
          }
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