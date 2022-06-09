import {
  Container,
  Conteudo,
  Img,
  Button,
  Price
} from './style';

type Props = {
  name: string, 
  price: number,
}

export function ProdutosPage(props: Props) {
  return (
    <Container>
      <Conteudo>
        <Img>
          <img src={`http://source.unsplash.com/random/250x400?r=${props.name}`} alt="img" />
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