import { Header } from '../../components/header';
import { ProdutosPage } from '../../components/produtosPage';
import { useFetch } from '../../hooks/useFethc';

import {
  HomeSection,
  Conteudo,
  ImgHome,
  Categorias
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
        <ImgHome></ImgHome>

        <Categorias>
          <div>
            categorias
          </div>
        </Categorias>
        <Conteudo>
          {isFetching && (
            <h1>Caregando....</h1>
          )}
          {data?.map(produto => (
            <ProdutosPage 
              img='img'
              name={produto.name}
              price={produto.prace}
            />
          ))}
          
        </Conteudo>
      </HomeSection>
    </>
    
  );
}