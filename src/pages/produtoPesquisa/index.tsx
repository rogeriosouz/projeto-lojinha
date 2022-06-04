import { useParams } from 'react-router-dom';

export function ProdutosPesquisa() {
  const { categoria } = useParams();
  const cate = categoria?.replace(':', '');

  return (
    <section style={{ marginTop: '60px' }}>
      <div>
        {cate}
      </div>
    </section>
  );
}