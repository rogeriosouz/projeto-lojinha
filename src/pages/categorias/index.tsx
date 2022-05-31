import { useEffect, useState } from 'react';
import { LinkButton } from '../../components/linkButton';
import { useFetch } from '../../hooks/useFethc';
import axios from '../../services/axios';
import voltar from '../../styles/img/voltar2.png';

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
        <Table>
          <VoltarLink>
            <a href="/adm">
              <img src={voltar} alt="voltar" />
            </a>
          </VoltarLink>
          <thead>
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
                <td>{item.categoria}</td>
                ))}
              </>
            </tr>
          </tbody>

          <tfoot>
            <tr>
              <td>
                <LinkButton to='/cadastrarCategoria' text='Cadastrar mas'/>
              </td>
            </tr>
          </tfoot>
        </Table>
      </Conteudo>
    </SecaoCategorias>

  );
}