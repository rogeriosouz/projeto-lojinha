import styled from 'styled-components';
import * as cores from '../../config/colors';

export const MenuLaterall = styled.div`
  position: fixed;
  top: 50px;
  left: 0;
  bottom: 0;
  min-width: 80%;
  height: 100%;
  background-color: #dfdfdf;

  h1 {
    width: 100%;
    height: 40px;
    background-color: ${cores.primaryColor};
    z-index: 2;
  }

  @media (min-width: 500px) {
    display: none;
  }
    
`;