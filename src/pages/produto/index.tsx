import { useParams } from 'react-router-dom';
import { Header } from '../../components/header';
import { useFetch } from '../../hooks/useFethc';

type Produto = {
  descricao: string
  name: string,
  prace: number,
  _id: string
}

import {
  SecaoProduto,
  Conteudo,
  ImgConfig,
  Dinhero,
  ConteudoNameDescricao
} from './style';

export function Produto() {
  const { name } = useParams();
  const { data, isFetching } = useFetch<Produto>(`/produto/:${name?.replace(':', '')}`)

  return (
    <>
      <Header />

      <SecaoProduto>

        {isFetching && (
          <div>
            caregando...
          </div>
        )}

        <Conteudo>
          <div>
            <ImgConfig>
              <p>img</p>
            </ImgConfig>

            <ConteudoNameDescricao>
              <h2>{data?.name}</h2>
              <p>{data?.descricao}</p>
            </ConteudoNameDescricao>

            <Dinhero>
              <p>R$: {data?.prace}</p>
            </Dinhero>
          </div>
        </Conteudo>
      </SecaoProduto>
    </>
  );
}