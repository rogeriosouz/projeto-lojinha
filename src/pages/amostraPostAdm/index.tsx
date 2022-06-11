import { Link, useNavigate } from 'react-router-dom';
import { useQuery, useQueryClient } from 'react-query';

import { Header } from '../../components/header';
import { FiEdit, MdOutlineDeleteForever } from 'react-icons/all';

import http from '../../services/axios';

import {
  SecaoPodutoAdm,
  Conteudo,
} from './style';


export type Produtos = {
  name: string,
  prace: number,
  categoria: string,
  descricao?: string,
  _id?: string
}



export function ProdutosAdm() {
  const { data, isFetching } = useQuery<Produtos[]>('produtos', async () => {
    const response = await http.get('/produto');
    return response.data
  }, {
    staleTime: 1000 * 60 // 1 minute
  })
  const client = useQueryClient();

  let navigate = useNavigate();

  async function invalidate() {
    await client.invalidateQueries('produtos');
  }


  async function deletProduto(name: string) {
    await http.delete(`/produto/:${name}`);
    invalidate();
  }

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
                      <td>
                        {produ.name} 
                        <div>
                          <a href={`/produtoEdit/:${produ.name}/:${produ.prace}/:${produ.descricao}`}>
                            <FiEdit color='#00f'/>
                          </a>
                          <button onClick={() => deletProduto(produ.name)}>
                            <MdOutlineDeleteForever fontSize={15} color='#f00'/>
                          </button>
                        </div>
                      </td>
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