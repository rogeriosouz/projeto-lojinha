import {
  Container,
  Conteudo,
  Img,
  Button,
  Price
} from './style';

type Props = {
  img: string, 
  name: string, 
  price: number,
}


export function ProdutosPage(props: Props) {
  return (
    <Container>
      <Conteudo>
        <Img>
          <p>img: {props.img}</p>
        </Img>

        <h2>{props.name}</h2>

        <Price>
          <p>R$: {props.price}</p>
        </Price>


        <Button>
          <button>Adicionar ao carinho</button>
        </Button>
        
      </Conteudo>
      
    </Container>
  )
}