import { Header } from '../../components/header';
import { LinkButton } from '../../components/linkButton';
import { useFetch } from '../../hooks/useFethc';

import {
  SecaoPodutoAdm,
  Conteudo
} from './style';

type Produtos = {
  name: string,
  prace: number,
  categoria: string,
  _id: string
}


export function ProdutosAdm() {
  const { data, isFetching } = useFetch<Produtos[]>('http://localhost:3334/produto');

  return (
    <>
      <Header />
      <SecaoPodutoAdm>
        <Conteudo>
          {isFetching && (
            <p>Caregando...</p>
          )}
           <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>price</th>
                  <th><a href="/categorias">Categoria</a></th>
                </tr>
              </thead>

              <tbody>
                {data?.map(produ => {
                  return (
                    <tr key={produ._id}>
                      <td>{produ.name}</td>
                      <td>{produ.prace}</td>
                      <td>{produ.categoria}</td>
                    </tr>
                    )
                })}
              </tbody>

              <tfoot>
                <tr>
                  <td>
                    <LinkButton to='/cadastrarProduto' text='Cadastrar mais'/>
                  </td>
                </tr>
              </tfoot>
          </table>
           
        </Conteudo>
      </SecaoPodutoAdm>
    </>
  );
}