import styled from 'styled-components';
import * as cores from '../../config/colors';

export const SecaoPodutoAdm = styled.section`
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
  
  table {
    background-color: ${cores.primaryColor};
    thead {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 34px;

      tr {
        th {
          height: 30px;
          border: 1px solid #000;
          width: 170px;
          color: ${cores.whiteColor};
          padding: 2px;
          margin-right: 10px;

          a {
            color: blue;
            cursor: pointer;
            :hover {
              text-decoration: underline;
            }
          }
        }
      }
    }

    tbody {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      tr {
        td {
          border: 1px solid #000;
          width: 170px;
          color: ${cores.whiteColor};
          margin-right: 10px;
        }
      }
    }

    tfoot {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      tr {
        td {
          width: 200px;
          color: ${cores.whiteColor};
          padding: 10px 0px;
          margin-right: 10px;
        }
      }
    }


  }
`;