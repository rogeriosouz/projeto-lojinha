import styled from 'styled-components';
import * as cores from '../../config/colors';

export const SecaoPodutoAdm = styled.section`
  width: 100%;
  min-height: 100vh;
  background-color: #dfdfdf;
  margin-top: 50px;
`;

export const Conteudo = styled.div`
  max-width: 700px;
  min-height: 100vh;
  margin: auto;

  display: flex;
  justify-content:center;
  align-items: center;
  
  table {
    background-color: ${cores.whiteColor};
    border-radius: 3px;

    thead {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 34px;

      tr {
        th {
          height: 30px;
          border: 1px solid ${cores.primaryColor};
          border-radius: 3px;
          width: 170px;
          color: ${cores.primaryColor};
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
          padding: 5px;
          border-radius: 3px;
          border: 1px solid ${cores.primaryColor};
          width: 170px;
          color: ${cores.primaryColor};
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
          color: ${cores.primaryColor};
          padding: 10px 0px;
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
        }
      }
    }


  }
`;