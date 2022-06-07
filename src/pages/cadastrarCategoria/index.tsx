import Cookies from 'js-cookie';
import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQueryClient } from 'react-query';
import { Link } from 'react-router-dom';

import { ButtonForms } from '../../components/buttonForm';
import { CampoForm } from '../../components/campoForm';
import { FlashMsg } from '../../components/flasMsg';
import { TitleForms } from '../../components/titleForm';

import axios from '../../services/axios';
import { IoMdArrowBack } from "react-icons/io";
import * as cores from '../../config/colors';

import {
  SecaoCadastrarCategoria,
  Conteudo,
  Form,
  VoltarLink
} from './style';



export function CadastrarCategoria() {
  const [inputCategoria, setInputCategoria ] = useState('');
  const [msgError, setMmsgError] = useState(['']);
  const [amostrarErro, setAmostrarErro] = useState(false);
  let navigate = useNavigate();

  const client = useQueryClient();

  async function invalidate() {
    await client.invalidateQueries(['categorias']);
  }

  function handleSubmit(e: FormEvent, categoria: string) {
    e.preventDefault();
   
    if(categoria === '') {
      setMmsgError(['Campo em branco!!']);
      setAmostrarErro(true);

      setTimeout(() => {
        setAmostrarErro(false);
      }, 5000);
      return;
    }

    if(categoria.length < 5) {
      setMmsgError(['Categoria tem quer ter dno minimo 5 caracteres!!']);
      setAmostrarErro(true);

      setTimeout(() => {
        setAmostrarErro(false);
      }, 5000);
      return;
    }
    try {
      const categorias = {
        categoria
      }
      axios.post(`/categoria`,categorias, {
        headers: { 'x-access-token': `${Cookies.get('tokenAdm')}`}
      })
      .then((response) => {
        invalidate(); 
        navigate('/categorias');
      })

      .catch(error => {
        setMmsgError(error.response.data.Errors);
        setAmostrarErro(true);

        setTimeout(() => {
          setAmostrarErro(false);
        }, 5000);
        return;
      })
    } catch (error) {
      console.log(null);
    }
  }

  return (
    <SecaoCadastrarCategoria>
      <Conteudo>
        <Form onSubmit={(e) => handleSubmit(e, inputCategoria)}>
          <VoltarLink>
            <Link to='/categorias'>
              <IoMdArrowBack fontSize={40} color={cores.primaryColor} />
            </Link>
          </VoltarLink>
          <TitleForms title='categorias' color={cores.primaryColor}/>

          {amostrarErro && (
            <FlashMsg children={msgError.map(item => (
              <p>{item}</p>
            ))} cor='#ff0000' duration={5000}/>
          )}

          <CampoForm 
          nameLabel='Categoria' 
          typeCampo='text' 
          autofocus={true} 
          onChanger={(e: any) => setInputCategoria(e.target.value)} 
          color={cores.primaryColor}
          />

          <ButtonForms name='Cadastrar' />
        </Form>
      </Conteudo>
    </SecaoCadastrarCategoria>
  );
}