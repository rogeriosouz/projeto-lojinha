import Cookies from 'js-cookie';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonForms } from '../../components/buttonForm';
import { CampoForm } from '../../components/campoForm';
import { FlashMsg } from '../../components/flasMsg';
import { TitleForms } from '../../components/titleForm';
import axios from '../../services/axios';

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

 

  function validarAmd(email: string, password: string) {
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
      axios.post('/adminlogin', adm)
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

  function handlesubmit(e: any) {
    e.preventDefault();
  }

  return (
    <SecaoAdmin>
      <Conteudo>
        <Form onSubmit={(e) => handlesubmit(e)}>
            <TitleForms title='Adm'/>

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
            />

            <CampoForm 
            nameLabel='Password' 
            typeCampo='password' 
            onChanger={(e: any) => setInputPasswrod(e.target.value)}
            />

            <ButtonForms name='Logar' onClick={() => validarAmd(inputEmail, inputPassword)}/>
        </Form>
      </Conteudo>
    </SecaoAdmin>
  );
}