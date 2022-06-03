import { Header } from '../../components/header';
import { useFetch } from '../../hooks/useFethc';
import { Link } from 'react-router-dom';

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
                  <th><Link to="/categorias">Categoria</Link></th>
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
                    <Link to='/cadastrarProduto'>Cadastrar mais</Link>
                  </td>
                </tr>
              </tfoot>
          </table>
           
        </Conteudo>
      </SecaoPodutoAdm>
    </>
  );
}