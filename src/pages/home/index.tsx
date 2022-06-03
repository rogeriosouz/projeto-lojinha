import { Header } from '../../components/header';
import { ProdutosPage } from '../../components/produtosPage';
import { useFetch } from '../../hooks/useFethc';
import { Link } from 'react-router-dom';

import fotoHomeIlustrativa from '../../styles/img/foto-ilustrativa.png';

import {
  HomeSection,
  Conteudo,
} from './style';

type Produtos = {
  name: string,
  prace: number, 
}

export function Home() {
  const { data, isFetching } = useFetch<Produtos[]>('/produto');


  return (
    <>
      <Header />
      
      <HomeSection>
        <Conteudo>
          {isFetching && (
            <h1>Caregando....</h1>
          )}
          {data?.map(produto => (
            <Link to={`/produto/:${produto.name}`} 
              key={produto.name}>
                <ProdutosPage 
                  img='img'
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