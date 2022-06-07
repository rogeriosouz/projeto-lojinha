import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import http from '../../services/axios';

import {
  Container,
  Wapre
} from './style';

type Categoria = {
  categoria: string
}

export function Categorias() {

  const { data, isFetching } = useQuery<Categoria[]>('cate', async () => {
    const response = await http.get('/categoria');
    return response.data;
  })

  return(
    <Container>
      <Wapre>
        <div>
          {isFetching && <p><strong>Caregando....</strong></p>}
          
          {data?.map(categoria => (
            <Link key={categoria.categoria} to={`/produtoPesquisa/:${categoria.categoria}`}>{categoria.categoria}</Link>
          ))}
          
        </div>
      </Wapre>
    </Container>
  );
}