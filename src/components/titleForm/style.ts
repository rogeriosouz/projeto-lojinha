import styled from 'styled-components';
import * as cores from '../../config/colors';

export const TitleForm = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: 460px) {
    h1 {
      font-size: 1em;
    }
  }
  h1 {
    color: ${(props) => props.color};
    margin-top: 20px;
  }
`;