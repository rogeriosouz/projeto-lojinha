import { useState, FormEvent, useContext } from 'react';
import { validate } from 'email-validator';
import { Link } from 'react-router-dom';

import { Header } from '../../components/header';
import { CampoForm } from '../../components/campoForm';
import { TitleForms } from '../../components/titleForm';
import { ButtonForms } from '../../components/buttonForm';
import { FlashMsg } from '../../components/flasMsg';

import * as cores from '../../config/colors';
 
import {
  SecaoLogin,
  Conteudo,
  Form,
  LinkRegister
} from './style';

import { AuthContext } from '../../contexts/AuthContext';

export function Login() {
  const [inputEmail , setInputEmail] = useState('');
  const [inputPassword , setInputPassword] = useState('');

  const { singIn, errors, amostrarError, setAmostrarError, setErrors } = useContext(AuthContext);

  async function handlesubmit(e: FormEvent, email: string, password: string) {
    e.preventDefault();
    const erros = [];

    if(!email || !password) {
      erros.push('Campos em branco!');
    }

    if(password.length < 5 || password.length > 50) {
      erros.push('Password presisa ter de 5 a 50 caracteres!');
    }

    if(!validate(email)) {
      erros.push('Email invalido!');
    }

    if(erros.length > 0) {
      setAmostrarError(true);
      setErrors(erros);

      setTimeout(() => {
        setAmostrarError(false);
      }, 5000)
      return;
    }

    try {
      await singIn({email, password});
    } catch (error) {
      console.log(null)
    }
  }

  return (
    <>
      <Header />
      <SecaoLogin>
        <Conteudo>
          <Form onSubmit={(e) => handlesubmit(e, inputEmail, inputPassword)}>
            <TitleForms title={'LOGIN'} color={cores.primaryColor}/>

            {amostrarError ? (
              <FlashMsg cor='#f00' children={errors?.map(item => (
                <p key={item}>{item}</p>
              ))} />
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
              onChanger={(e: any) => setInputPassword(e.target.value)} 
              color={cores.primaryColor}
            />

            <LinkRegister>
              <Link to='/register'>Register</Link>
            </LinkRegister>

            <ButtonForms name='Loga'/> 
          </Form>
        </Conteudo>
      </SecaoLogin>
    </>
  );
}