import styled from 'styled-components';
import * as cores from '../../config/colors';


export const LinkDoMenu = styled.div`
  width: 100%;
  height: 40px;
  margin-top: 4px;
  background-color: ${cores.primaryColor};
  transition: all 0.3s ease-in-out;
  :hover {
    background-color: transparent;
    color: ${cores.primaryColor};
  }

  a {
    font-size: 1.1em;
    font-family: sans-serif;
    color: ${cores.whiteColor};
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;

    :hover {
      color: ${cores.primaryColor};
    }
    
  }
`;