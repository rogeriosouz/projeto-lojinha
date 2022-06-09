import { ButtonForms } from '../../components/buttonForm';

import {
  PrsonSecao,
  Conteudo
} from './style';

import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

export function Person() {
  let navigate = useNavigate();

  function Logoof() {
    Cookies.remove('tokenUser');
    Cookies.remove('name');
    navigate('/')
  }

  return (
    <PrsonSecao>
      <Conteudo>
        <div>
          <img src="http://source.unsplash.com/random/200x200?r=1" alt="img" />
          <p>Olá {Cookies.get('name')}</p>
          <div>
            <ButtonForms name='Logoof' onClick={() => Logoof()}/>
          </div>
        </div>
      </Conteudo>
    </PrsonSecao>
  );
}