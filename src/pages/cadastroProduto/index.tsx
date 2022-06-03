import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonForms } from '../../components/buttonForm';
import { CampoForm } from '../../components/campoForm';
import { FlashMsg } from '../../components/flasMsg';
import { TitleForms } from '../../components/titleForm';
import { Link } from 'react-router-dom';

import axios from '../../services/axios';
import voltar from '../../styles/img/voltar2.png';

import {
  SecaoCadastroProduc,
  Conteudo,
  Form,
  TextArea,
  VoltarLink,
  OpcaoInput,
  NamePrice
} from './style';

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
    axios.get('/categoria').then(response => {
      setCategorias(response.data);
    })
  }, [])

  function validarCadastro(name: string, prace: number, descricao: string, categoria: string) {
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

      const id = Cookies.get('idAdm');
      axios.post(`/produto`, produtos, {
        headers: { 'x-access-token': `Bearer ${Cookies.get('tokenAdm')}`}
      })
      .then(response => {
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

  function handlesubmit(e: any) {
    e.preventDefault();
  }

  return (
    <SecaoCadastroProduc>
      <Conteudo>
        <Form onSubmit={(e) => handlesubmit(e)} >
          <VoltarLink>
            <Link to="/adm">
              <img src={voltar} alt="voltar" />
            </Link>
          </VoltarLink>
          <TitleForms title='Cadastra Produto'/>

          {amostraError ? (
            <FlashMsg 
            children={errorMsg.map(item => (
              <p key={item}>{item}</p>
            ))}
            cor='#f00'
            duration={5000}
            />
          ) : ''}

          <NamePrice>
            <CampoForm 
              nameLabel='Name' 
              typeCampo='text' 
              autofocus={true} 
              onChanger={(e: any) => setInputName(e.target.value)}
              />

            <CampoForm 
              nameLabel='Price' 
              typeCampo='number' 
              onChanger={(e: any) => setInputPrice(e.target.value)}
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

          <ButtonForms 
            name='Cadastra' 
            onClick={() => validarCadastro(inputName, inputPrice, inputDescricao, inputCategoria)}
          />

        </Form>
      </Conteudo>
    </SecaoCadastroProduc>
  );
}