import styled from 'styled-components';
import * as cores from '../../config/colors';

export const MenuLaterall = styled.div`
  position: fixed;
  top: 50px;
  left: 0px;
  right: 0;
  min-width: 80%;
  height: 100%;
  background-color: #dfdfdf;
  display: flex;
  flex-direction: column;

  animation: go-back 0.3s;

  @keyframes go-back {
    0% {
        transform: translateX(-2000px);
    }
    100% {
        transform: translateX(0px);  
    }
  }



  @media (min-width: 500px) {
    display: none;
  }
`;