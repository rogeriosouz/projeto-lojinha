import Cookies from 'js-cookie';
import { useEffect, useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { IoMdArrowBack } from "react-icons/io";

import { ButtonForms } from '../../components/buttonForm';
import { CampoForm } from '../../components/campoForm';
import { FlashMsg } from '../../components/flasMsg';
import { TitleForms } from '../../components/titleForm';

import http from '../../services/axios';
import * as cores from '../../config/colors';

import {
  SecaoCadastroProduc,
  Conteudo,
  Form,
  TextArea,
  VoltarLink,
  OpcaoInput,
  NamePrice
} from './style';

import { useQueryClient } from 'react-query';

type Categorias = {
  categoria: string,
}

export function CadastroProduto() {
  const [inputName, setInputName] = useState('');
  const [inputPrice, setInputPrice] = useState(0);
  const [inputDescricao, setInputDescricao] = useState('');
  const [inputCategoria, setInputCategoria] = useState('');

  const [errorMsg, setErrorMsg] = useState(['']);
  const [amostraError, setAmostraError] = useState(false);
  const [categorias, setCategorias] = useState<Categorias[]>([]);
  let navigate = useNavigate();

  useEffect(() => {
    http.get('/categoria').then(response => {
      setCategorias(response.data);
    })
  }, [])

  const client = useQueryClient();

  async function invalidate() {
    await client.invalidateQueries('produtos');
  }

  function handlesubmit(e: FormEvent, name: string, prace: number, descricao: string, categoria: string): void {
    e.preventDefault();
    const erros = [];
    
    if(name === '' || prace === 0 || descricao === '') {
      setErrorMsg(['Campo em Branco!!']);
      setAmostraError(true);

      setTimeout(() => {
        setAmostraError(false);
      }, 5000);
      return;
    }

    if(name.length < 5 || name.length > 50) {
      erros.push('Name presissar ter de 5 a 50 caracteres!!')
    }

    if(descricao.length < 5 || descricao.length > 250) {
      erros.push('Descriçao presissar ter de 5 a 250 caracteres!!');
    }

    if(erros.length > 0) {
      setErrorMsg(erros);
      setAmostraError(true);

      setTimeout(() => {
        setAmostraError(false);
      }, 5000);
      return;
    }

    try {
      const produtos = {
        "name": name,
        "prace": Number(prace),
        "descricao": descricao,
        "categoria": categoria
      }

      http.post(`/produto`, produtos)
      .then(response => {
        invalidate();
        navigate('/adm');
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
    <SecaoCadastroProduc>
      <Conteudo>
        <Form onSubmit={(e) => handlesubmit(e, inputName, inputPrice, inputDescricao, inputCategoria)} >
          <VoltarLink>
            <Link to="/adm">
              <IoMdArrowBack fontSize={40} color={cores.primaryColor}/>
            </Link>
          </VoltarLink>

          <TitleForms title='Cadastra Produto' color={cores.primaryColor}/>

          {amostraError ? (
            <FlashMsg 
            children={errorMsg.map(item => (
              <p key={item}>{item}</p>
            ))}
            cor='#f00'
            />
          ) : ''}

          <NamePrice>
            <CampoForm 
              nameLabel='Name' 
              typeCampo='text' 
              autofocus={true} 
              onChanger={(e: any) => setInputName(e.target.value)}
              color={cores.primaryColor}
              />

            <CampoForm 
              nameLabel='Price' 
              typeCampo='number' 
              onChanger={(e: any) => setInputPrice(e.target.value)}
              color={cores.primaryColor}
              />
          </NamePrice>

          <TextArea>
            <label htmlFor="descricao">Descriçao: </label>
            <textarea 
              id='descricao' 
              onChange={(e: any) => setInputDescricao(e.target.value)}
            >
            </textarea>
          </TextArea>

          <OpcaoInput>
            <label htmlFor="opcao">Categoria:</label>
            <select id="opcao" onChange={(e: any) => setInputCategoria(e.target.value)}>
              <option value="">categoria:</option>
              {categorias.map(item => (
                <option key={item.categoria} value={item.categoria}>{item.categoria}</option>
              ))}
            </select>
          </OpcaoInput>

          <ButtonForms name='Cadastra'/>
        </Form>
      </Conteudo>
    </SecaoCadastroProduc>
  );
}