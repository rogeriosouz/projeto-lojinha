import { Link, useNavigate } from 'react-router-dom';
import { useQuery, useQueryClient } from 'react-query';
import { IoMdArrowBack } from "react-icons/io";

import * as cores from '../../config/colors';

import axios from '../../services/axios';
import { FiEdit, MdOutlineDeleteForever } from 'react-icons/all';

import {
  SecaoCategorias,
  Conteudo,
  Table,
  ImgLink,
  LinkButtonTable,
  Delete
} from './style';
import http from '../../services/axios';

export type Categoria = {
  categoria: string,
  _id: string;
}

export function Categorias() {
  const {  data, isFetching } = useQuery<Categoria[]>('categorias', async () => {
    const response = await axios.get('/categoria');
    return response.data
  }, {
    staleTime: 1000 * 60 // 1 minute
  });
  const client = useQueryClient();

  async function invalidate() {
    await client.invalidateQueries(['categorias']);
  }

  async function deleteCategoria(id: string) {
    await http.delete(`/categoria/${id}`);
    invalidate();
  }

  return (
    <SecaoCategorias>
      <Conteudo>
        <Table>
          <thead>
              <tr>
                <ImgLink>
                  <Link to="/adm">
                    <IoMdArrowBack fontSize={40} color={cores.primaryColor}/>
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
                <td key={item.categoria}>
                  {item.categoria}
                  <div>
                    <Link to={`/categorias/:${item._id}/:${item.categoria}`}>
                      <FiEdit color='#00f'/>
                    </Link>
                    <Delete onClick={() => deleteCategoria(item._id)}>
                      <MdOutlineDeleteForever color='#f00'/>
                    </Delete>
                  </div>
                </td>
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