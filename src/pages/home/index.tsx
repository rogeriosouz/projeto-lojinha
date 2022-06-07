import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

import { Header } from '../../components/header';
import { ProdutosPage } from '../../components/produtosPage';
import { Categorias } from '../../components/categorias';

import {
  HomeSection,
  Conteudo,
} from './style';

import axios from '../../services/axios';

type Produtos = {
  name: string,
  prace: number, 
}

export function Home() {
  const { data, isFetching } = useQuery<Produtos[]>('produtosHome', async () => {
    const response = await axios.get('/produto');
    return response.data;
  });


  return (
    <>
      <Header />
      
      <HomeSection>
        <div>
          <Categorias />
        </div>
        <Conteudo>
          {isFetching && (
            <h1>Caregando....</h1>
          )}
          {data?.map(produto => (
            <Link to={`/produto/:${produto.name}`} 
              key={produto.name}>
                <ProdutosPage 
                  name={produto.name}
                  price={produto.prace}
                />
              </Link>
          ))}
          
        </Conteudo>
      </HomeSection>
    </>
    
  );
}