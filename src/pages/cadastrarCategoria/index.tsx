import Cookies from 'js-cookie';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonForms } from '../../components/buttonForm';
import { CampoForm } from '../../components/campoForm';
import { FlashMsg } from '../../components/flasMsg';
import { TitleForms } from '../../components/titleForm';
import { Link } from 'react-router-dom';
import axios from '../../services/axios';

import voltar from '../../styles/img/voltar2.png';


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
  
  function cadastrarCategoria(categoria: string) {

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
        headers: { 'x-access-token': `Bearer ${Cookies.get('tokenAdm')}`}
      })
      .then(response => {
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

  function handleSubmit(e: any) {
    e.preventDefault();
  }

  return (
    <SecaoCadastrarCategoria>
      <Conteudo>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <VoltarLink>
            <Link to='/categorias'>
              <img src={voltar} alt="voltar" />
            </Link>
          </VoltarLink>
          <TitleForms title='categorias'/>

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
          />

          <ButtonForms name='Cadastrar' onClick={() => cadastrarCategoria(inputCategoria)}/>
        </Form>
      </Conteudo>
    </SecaoCadastrarCategoria>
  );
}