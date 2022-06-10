import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useContext } from 'react';
import { ButtonForms } from '../../components/buttonForm';

import {
  PrsonSecao,
  Conteudo
} from './style';

import { AuthContext } from '../../contexts/AuthContext';

export function Person() {
  const { user } = useContext(AuthContext);
  let navigate = useNavigate();

  function Logoof() {
    Cookies.remove('tokenUser');
    Cookies.remove('idUser');
    navigate('/')
  }

  return (
    <PrsonSecao>
      <Conteudo>
        <div>
          <img src="http://source.unsplash.com/random/200x200?r=1" alt="img" />
          <p>ola {user?.name}</p>
          <div>
            <ButtonForms name='Logoof' onClick={() => Logoof()}/>
          </div>
        </div>
      </Conteudo>
    </PrsonSecao>
  );
}