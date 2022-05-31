import styled from 'styled-components';
import * as cores from '../../config/colors';

export const FooterRodape = styled.footer`
  width: 100%;
  height: 30px;

  background-color: ${cores.primaryColor};

  div {
    margin: auto;
    max-width: 700px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${cores.whiteColor};
  }
`;