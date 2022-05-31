import styled from 'styled-components';
import * as cores from '../../config/colors';

export const ContaineCampo = styled.div`
  width: 100%;
  height: 100%;

  margin-bottom: 20px;

  input {
    width: 100%;
    height: 40px;
    border: none;
    font-size: 1.3em;
    padding: 5px;
    border-radius: 3px;
    border: 1px solid ${cores.secondColorr};

    :hover {
      border: 1px solid ${cores.primaryDarkColor};
    }
  }

  label {
    display: block;
    font-size: 1.3em;
    margin-bottom: 4px;
    color: ${cores.whiteColor};
  }
`;