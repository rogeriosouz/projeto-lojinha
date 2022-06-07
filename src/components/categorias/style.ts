import styled from 'styled-components';
import * as cores from '../../config/colors';


export const Container = styled.div`
  margin-top: 50px;
  width: 100%;
  height: 50px;
  background-color: #694ea30a;
  @media (max-width: 500px) {
    display: none;
  }
`;

export const Wapre = styled.div`
  max-width: 600px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    
    a {
      color: ${cores.primaryColor};
      width: 100%;
      height: 50px;

      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      padding: 5px;
      transition: all 0.3s linear;

      :hover {
        background-color: ${cores.primaryColor};
        color: ${cores.whiteColor}
      }
    }
  }
`;

