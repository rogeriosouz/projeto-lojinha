import { useState, FormEvent } from 'react';
import Cookies from 'js-cookie';
import { validate } from 'email-validator';
import { Link, useNavigate } from 'react-router-dom';

import { Header } from '../../components/header';
import { CampoForm } from '../../components/campoForm';
import { TitleForms } from '../../components/titleForm';
import { ButtonForms } from '../../components/buttonForm';
import { FlashMsg } from '../../components/flasMsg';

import axios from '../../services/axios';
import * as cores from '../../config/colors';
 
import {
  SecaoLogin,
  Conteudo,
  Form,
  LinkRegister
} from './style';

export function Login() {
  const [inputEmail , setInputEmail] = useState('');
  const [inputPassword , setInputPassword] = useState('');
  const [amostrarErr, setAmostrarErr] = useState(false);
  const [msgErro, setMsgErro] = useState(['']);
  let navigate = useNavigate();


  function handlesubmit(e: FormEvent, email: string, password: string): void {
    e.preventDefault();
    const erros = [];

    if(email === '' || password === '') {
      setMsgErro(['Campos em branco!!']);
      setAmostrarErr(true);

      setTimeout(() => {
        setAmostrarErr(false);
      }, 5000)
      return;
    }

    if(password.length < 5 || password.length > 50) {
      erros.push('Password presisa ter de 5 a 50 caracteres!!');
    }

    if(!validate(email)) {
      erros.push('Email invalido');
    }

    if(erros.length > 0) {
      setAmostrarErr(true);
      setMsgErro(erros);
      
      setTimeout(() => {
        setAmostrarErr(false);
      }, 5000)
      return;
    }

    try {
      const user = {
        email,
        password
      }

      axios.post('/login',user)
      .then(response => {
        Cookies.set('id', response.data.id, { expires: 2 });
        Cookies.set('name', response.data.name, { expires: 2 });
        navigate('/');
      }) .catch(erro => {
        setAmostrarErr(true);
        setMsgErro(erro.response.data.Erros);

        setTimeout(() => {
          setAmostrarErr(false);
        }, 5000)
        return;
      })

    } catch (error) {
      console.log(null);
    }
  }

  return (
    <>
      <Header />
      <SecaoLogin>
        <Conteudo>
          <Form onSubmit={(e) => handlesubmit(e, inputEmail, inputPassword)}>
            <TitleForms title={'LOGIN'} color={cores.primaryColor}/>

            {amostrarErr ? (
              <FlashMsg cor='#f00' duration={5000} children={msgErro.map(item => (
                <p>{item}</p>
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