import styled from 'styled-components';

type Click ={
  click: boolean;
}

export const MenuLaterall = styled.div<Click>`
  position: fixed;
  top: 50px;
  left: ${props => props.click ? '0' : '-100%'};
  right: 100%;
  min-width: 90%;
  height: 100%;
  background-color: #dfdfdf;
  display: flex;

  flex-direction: column;

  transition: all 0.6s ease-in-out;

  @media (min-width: 500px) {
    display: none;
  }
`;