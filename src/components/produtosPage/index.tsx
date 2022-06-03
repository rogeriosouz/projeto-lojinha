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
          <p></p>
        </Img>

        <p>{props.name}</p>

        <Price>
          <p>R$: {props.price} </p>
        </Price>


        <Button>
          <button>Adicionar ao carinho</button>
        </Button>
        
      </Conteudo>
      
    </Container>
  )
}