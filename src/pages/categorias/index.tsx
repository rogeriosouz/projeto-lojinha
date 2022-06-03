import voltar from '../../styles/img/voltar2.png';
import { Link } from 'react-router-dom';
import axios from '../../services/axios';
import { useQuery } from 'react-query';

import {
  SecaoCategorias,
  Conteudo,
  Table
} from './style';

type Categoria = {
  categoria: string,
}

export function Categorias() {
  const {  data: categorias, isFetching } = useQuery<Categoria[]>('categoria', async () => {
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
                <td>
                  <Link to="/adm">
                    <img src={voltar} alt="voltar" />
                  </Link>
                </td>
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
              {categorias?.map(item => (
                <td key={item.categoria}>{item.categoria}</td>
                ))}
              </>
            </tr>
          </tbody>

          <tfoot>
            <tr>
              <td>
                <Link to='/cadastrarCategoria'>Cadastrar mas</Link>
              </td>
            </tr>
          </tfoot>
        </Table>
      </Conteudo>
    </SecaoCategorias>

  );
}