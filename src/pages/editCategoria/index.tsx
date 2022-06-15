import { FormEvent, useState } from 'react';
import { IoMdArrowBack } from 'react-icons/io';
import { useQueryClient } from 'react-query';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ButtonForms } from '../../components/buttonForm';
import { CampoForm } from '../../components/campoForm';
import { FlashMsg } from '../../components/flasMsg';
import { TitleForms } from '../../components/titleForm';
import http from '../../services/axios';
import * as cores from '../../config/colors';

import {
  SecaoCadastrarCategoria,
  Conteudo,
  Form,
  VoltarLink
} from '../cadastrarCategoria/style';

export function EditCategoria() {
  const [inputCategoria, setInputCategoria ] = useState('');
  const [msgError, setMmsgError] = useState(['']);
  const [amostrarErro, setAmostrarErro] = useState(false);

  const { categoria, _id } = useParams();

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

      http.put(`/categoria/${_id}`, categorias)
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
          <TitleForms title={`editar Categoria: ${categoria?.replace(':', '')}`} color={cores.primaryColor}/>

          {amostrarErro && (
            <FlashMsg children={msgError.map(item => (
              <p>{item}</p>
            ))} cor='#ff0000'/>
          )}

          <CampoForm 
            nameLabel='Categoria' 
            typeCampo='text' 
            autofocus={true} 
            onChanger={(e: any) => setInputCategoria(e.target.value)} 
            color={cores.primaryColor}
            placeholder={categoria?.replace(':', '')}
          />

          <ButtonForms name='Editar' />
        </Form>
      </Conteudo>
    </SecaoCadastrarCategoria>
  );
}