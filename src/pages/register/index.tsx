import { useState, FormEvent, useContext } from 'react';
import { validate } from 'email-validator';

import { ButtonForms } from '../../components/buttonForm';
import { CampoForm } from '../../components/campoForm';
import { Header } from '../../components/header';
import { TitleForms } from '../../components/titleForm';
import { FlashMsg } from '../../components/flasMsg';
import * as cores from '../../config/colors';

import {
  SecaoRegister,
  Conteudo,
  Form
} from './style';

import { AuthContext } from '../../contexts/AuthContext';

export function Register() {
  const [inputEmail, setInputEmail] = useState('');
  const [inputPasswod, setInputPasswod] = useState('');
  const [inputName, setInputName] = useState('');

  const { register, errors, amostrarError, setAmostrarError, setErrors } = useContext(AuthContext);

  async function handlesubmit(e: FormEvent,  name: string, email: string, password: string) {
    e.preventDefault();
    const erros = [];

    if(!email || !password || !name) {
      erros.push('Campos em branco!');
    }

    if(name.length < 5 || name.length > 50) {
      erros.push('Name presisa ter de 5 a 50 caracteres!');
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
      await register({ name, email, password });
    } catch (error) {
      console.log(null)
    }
  }

  return (
    <>
      <Header />
      <SecaoRegister>
        <Conteudo>
          <Form onSubmit={(e) => handlesubmit(e, inputName, inputEmail, inputPasswod)} >
            <TitleForms title='REGISTER' color={cores.primaryColor}/> 

            {amostrarError ? (
              <FlashMsg cor='#f00'>
                {errors.map(item => (
                    <p key={item}>{item}</p>
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