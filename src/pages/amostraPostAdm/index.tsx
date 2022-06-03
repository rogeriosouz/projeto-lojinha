import { Header } from '../../components/header';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';

import {
  SecaoPodutoAdm,
  Conteudo
} from './style';
import axios from '../../services/axios';

type Produtos = {
  name: string,
  prace: number,
  categoria: string,
  _id: string
}


export function ProdutosAdm() {
  const { data, isFetching } = useQuery<Produtos[]>('produtos', async () => {
    const response = await axios.get('/produto');

    return response.data
  })

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