import voltar from '../../styles/img/voltar3.png';
import { Link } from 'react-router-dom';
import axios from '../../services/axios';
import { useQuery } from 'react-query';

import {
  SecaoCategorias,
  Conteudo,
  Table,
  ImgLink,
  LinkButtonTable
} from './style';

export type Categoria = {
  categoria: string,
}

export function Categorias() {
  const {  data, isFetching } = useQuery<Categoria[]>('categorias', async () => {
    const response = await axios.get('/categoria');
    return response.data
  }, {
    staleTime: 1000 * 60 // 1 minute
  });

  return (
    <SecaoCategorias>
      <Conteudo>
        <Table>
          <thead>
              <tr>
                <ImgLink>
                  <Link to="/adm">
                    <img src={voltar} alt="voltar" />
                  </Link>
                </ImgLink>
              </tr>
            <tr>
              <th>Categorias</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <>
              {isFetching && (
                <td>Caregando...</td>
              )}
              {data?.map(item => (
                <td key={item.categoria}>{item.categoria}</td>
                ))}
              </>
            </tr>
          </tbody>

          <tfoot>
            <tr>
              <LinkButtonTable>
                <Link to='/cadastrarCategoria'>Cadastrar mas</Link>
              </LinkButtonTable>
            </tr>
          </tfoot>
        </Table>
      </Conteudo>
    </SecaoCategorias>

  );
}