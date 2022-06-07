import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';

import { Header } from '../../components/header';
import { ProdutosPage } from '../../components/produtosPage';

import axios from '../../services/axios';

import {
  PesquisaProdutoSection,
  Conteudo
} from './style';

type Produtos = {
  name: string,
  prace: number,
  descricao: string,
  categoria: string
}

export function ProdutosPesquisa() {
  const { categoria }  = useParams<string>();
  const cate = categoria?.replace(':', '');

  const { data, isFetching } = useQuery(['pesquisaProdutos', categoria], async () => {
    const response = await axios.get('/produto');
    const produtos: Produtos[] = [];
    response.data.map((item: Produtos) => {
      if(item.categoria === cate) {
        produtos.push(item);
      }
    })
    return produtos  
  }, {
    staleTime: 1000 * 60 // 1 minuto
  })


  return (
    <> 
      <Header />
      <PesquisaProdutoSection>
        <Conteudo>
          {isFetching ? (
            <p><strong>Caregando...</strong></p>
          ): (
            <div>
              {data?.map((item: Produtos) => (
                <Link 
                  to={`/produto/:${item.name}`} 
                  key={item.name}
                >
                  <ProdutosPage 
                    name={item.name}
                    price={item.prace}
                  />
                </Link>
              ))}
            </div>
          )}
        </Conteudo>
      </PesquisaProdutoSection>
    </>
  );
}