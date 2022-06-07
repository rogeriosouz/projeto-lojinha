import Cookies from 'js-cookie';
import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import http from '../../services/axios';

import { ButtonForms } from '../../components/buttonForm';
import { CampoForm } from '../../components/campoForm';
import { FlashMsg } from '../../components/flasMsg';
import { TitleForms } from '../../components/titleForm';
import * as cores from '../../config/colors';

import {
  SecaoAdmin,
  Conteudo,
  Form,
} from './style';

export function Admin() {
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPasswrod] = useState('');
  const [errorMsg, setErrorMsg] = useState(['']);
  const [amostraError, setAmostraError] = useState(false);
  let navigate = useNavigate();


  function handlesubmit(e: FormEvent, email: string, password: string) {
    e.preventDefault();
    const errors = [];

    if(email === '' || password === '') {
      setErrorMsg(['Campo em branco']);
      setAmostraError(true);

      setTimeout(() => {
        setAmostraError(false);
      }, 5000);
    }

    if(password.length < 5 || password.length > 50) {
      errors.push('Passwrod de 5 a 50 Caracter');
    }

    if(errors.length > 0) {
      setErrorMsg(errors);
      setAmostraError(true);

      setTimeout(() => {
        setAmostraError(false);
      }, 5000)
      return;
    }

    try {
      const adm = {
        email,
        password
      }
      http.post('/adminlogin', adm)
      .then(response => {
        Cookies.set('tokenAdm', response.data.token, { expires: 2 });
        navigate('/');
      })
      .catch(error => {
        setErrorMsg(error.response.data.Errors);
        setAmostraError(true);

        setTimeout(() => {
          setAmostraError(false);
        }, 5000);
        return;
      })
    } catch (error) {
      console.log(null);
    }
  }

  return (
    <SecaoAdmin>
      <Conteudo>
        <Form onSubmit={(e) => handlesubmit(e, inputEmail, inputPassword)}>
            <TitleForms title='Adm' color={cores.primaryColor}/>

            {amostraError ? (
              <FlashMsg duration={5000} children={errorMsg.map(item => (
                <p>{item}</p>
              ))} cor='#f00'/>
            ) : ''}

            <CampoForm 
            nameLabel='E-mail' 
            typeCampo='email'
            autofocus={true} 
            onChanger={(e: any) => setInputEmail(e.target.value)}
            color={cores.primaryColor}
            />

            <CampoForm 
            nameLabel='Password' 
            typeCampo='password' 
            onChanger={(e: any) => setInputPasswrod(e.target.value)}
            color={cores.primaryColor}
            />

            <ButtonForms name='Logar'/>
        </Form>
      </Conteudo>
    </SecaoAdmin>
  );
}