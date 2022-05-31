import styled from 'styled-components';
import * as cores from '../../config/colors';

export const LinkButtonn = styled.a`
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

`; 