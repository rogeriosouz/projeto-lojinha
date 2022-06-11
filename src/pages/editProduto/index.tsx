import { FormEvent, useEffect, useState } from 'react';
import { IoMdArrowBack } from 'react-icons/io';
import { useQueryClient } from 'react-query';
import { Link, useNavigate, useParams } from 'react-router-dom';
import http from '../../services/axios';
import  * as cores from '../../config/colors';

type Categorias = {
  categoria: string,
}

import {
  SecaoCadastroProduc,
  Conteudo,
  Form,
  TextArea,
  VoltarLink,
  OpcaoInput,
  NamePrice
} from '../cadastroProduto/style';
import { TitleForms } from '../../components/titleForm';
import { FlashMsg } from '../../components/flasMsg';
import { CampoForm } from '../../components/campoForm';
import { ButtonForms } from '../../components/buttonForm';


export function EditProduto() {
  const [inputName, setInputName] = useState('');
  const [inputPrice, setInputPrice] = useState(0);
  const [inputDescricao, setInputDescricao] = useState('');
  const [inputCategoria, setInputCategoria] = useState('');

  const [errorMsg, setErrorMsg] = useState(['']);
  const [amostraError, setAmostraError] = useState(false);
  const [categorias, setCategorias] = useState<Categorias[]>([]);

  const { nameUP, prace, descricao } = useParams();



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
      const Novoprodutos = {
        "name": name,
        "prace": Number(prace),
        "descricao": descricao,
        "categoria": categoria
      }

      http.put(`/produto/:${nameUP}`, Novoprodutos)
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

          <TitleForms title={`Editar: ${nameUP?.replace(':', '')}`} color={cores.primaryColor}/>

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
              placeholder={nameUP?.replace(':', '')}
              />

            <CampoForm 
              nameLabel='Price' 
              typeCampo='number' 
              onChanger={(e: any) => setInputPrice(e.target.value)}
              color={cores.primaryColor}
              placeholder={prace?.replace(':', '')}
              />
          </NamePrice>

          <TextArea>
            <label htmlFor="descricao">Descriçao: </label>
            <textarea 
              id='descricao' 
              onChange={(e: any) => setInputDescricao(e.target.value)}
              placeholder={descricao?.replace(':', '')}
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

          <ButtonForms name='Editar'/>
        </Form>
      </Conteudo>
    </SecaoCadastroProduc>
  );
}