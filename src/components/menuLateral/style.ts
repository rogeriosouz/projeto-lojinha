import styled from 'styled-components';
import * as cores from '../../config/colors';

export const MenuLaterall = styled.div`
  position: fixed;
  top: 50px;
  left: 0px;
  bottom: 0;
  right: 200px;
  min-width: 80%;
  height: 100%;
  background-color: #dfdfdf;
  animation: go-back 0.3s;

  @keyframes go-back {
    0% {
        transform: translateX(-2000px);
    }
    100% {
        transform: translateX(0px);  
    }
  }

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