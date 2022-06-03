import { useFetch } from '../../hooks/useFethc';
import voltar from '../../styles/img/voltar2.png';
import { Link } from 'react-router-dom';

import {
  SecaoCategorias,
  Conteudo,
  Table,
  VoltarLink
} from './style';

type Categoria = {
  categoria: string,
}

export function Categorias() {
  const { data: categorias, isFetching } = useFetch<Categoria[]>('/categoria');

  return (
    <SecaoCategorias>
      <Conteudo>
        <VoltarLink>
          
        </VoltarLink>
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