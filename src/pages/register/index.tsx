import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { validate } from 'email-validator';
import Cookies from 'js-cookie';

import { ButtonForms } from '../../components/buttonForm';
import { CampoForm } from '../../components/campoForm';
import { Header } from '../../components/header';
import { TitleForms } from '../../components/titleForm';
import { FlashMsg } from '../../components/flasMsg';

import http from '../../services/axios';
import * as cores from '../../config/colors';


import {
  SecaoRegister,
  Conteudo,
  Form
} from './style';

export function Register() {
  const [inputEmail, setInputEmail] = useState('');
  const [inputPasswod, setInputPasswod] = useState('');
  const [inputName, setInputName] = useState('');

  const [msgErrors, setMsgErrors] = useState(['']);
  const [amostraError, setAmostraError] = useState(false);
  let navigate = useNavigate();


  function handlesubmit(e: FormEvent, name: string, email: string, password: string) {
    e.preventDefault();
    const error = [];

    if(name === '' || email === '' || password === '') {
      setMsgErrors(['Campos em branco!!']);
      setAmostraError(true);

      setTimeout(() => {
        setAmostraError(false);
      }, 5000)
      return;
    }
    

    if(password.length < 5 || password.length > 50) {
      error.push('Password pressisa ter de 5 a 50 caracteres!!')
    }

    if(name.length < 5 || name.length > 50) {
      error.push('Name Presisa ter de 3 a 50 caracteres!!')
    }

    if(!validate(email)) {
      error.push('email invalido')
    }

    if(error.length > 0) {
      setMsgErrors(error);
      setAmostraError(true);

      setTimeout(() => {
        setAmostraError(false);
      }, 5000)
      return;
    }

    try {
      const user = {
        name,
        email,
        password
      }
      http.post('/register', user)
      .then(response => {
        Cookies.set('id', response.data.id, { expires: 2 });
        Cookies.set('name', name, { expires: 2 });
        navigate('/');
      }).catch(err => {
        setMsgErrors(err.response.data.Errors);
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
    <>
      <Header />
      <SecaoRegister>
        <Conteudo>
          <Form onSubmit={(e) => handlesubmit(e, inputName, inputEmail, inputPasswod)} >
            <TitleForms title='REGISTER' color={cores.primaryColor}/> 

            {amostraError ? (
              <FlashMsg cor='#f00' duration={5000}>
                {msgErrors.map(item => (
                    <p>{item}</p>
                ))}
              </FlashMsg>
            ) : ''}

            <CampoForm 
              nameLabel='Name' 
              typeCampo='text' 
              autofocus={true} 
              onChanger={(e: any) => setInputName(e.target.value)}
              color={cores.primaryColor}
            />
        
            <CampoForm 
              nameLabel='E-mail' 
              typeCampo='email' 
              onChanger={(e: any) => setInputEmail(e.target.value)}
              color={cores.primaryColor}
            />
          
            <CampoForm 
              nameLabel='Password' 
              typeCampo='password' 
              onChanger={(e: any) => setInputPasswod(e.target.value)}
              color={cores.primaryColor}
            />

            <ButtonForms name='Register' />
          </Form>
        </Conteudo>
      </SecaoRegister>
    </>
    
  );
}