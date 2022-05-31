import styled from 'styled-components';
import * as cores from '../../config/colors';

export const ButtonForm = styled.div`
  width: 100%;
  height: 30px;
  button {
    color: ${cores.primaryColor};
    width: 30%;
    height: 100%;
    background-color: ${cores.whiteColor};
    border-radius: 2px;
    border: 1px solid ${cores.secondColorr};
    font-size: 1.1em;
    :hover {
      background-color: ${cores.primaryColor};
      color: ${cores.whiteColor};
      border: 1px solid ${cores.primaryDarkColor};
      box-shadow: 1px 1px 7px 2px #00000052;
    }

    transition:all 0.3s linear;
  }

  @media (max-width: 460px) {
    button {
      font-size: 0.9em;
    }
  }
`; 