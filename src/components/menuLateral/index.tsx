import { MenuLaterall } from './style';

type Props = {
  children: string;
  clikc: boolean;
}

export function MenuLateral(props: Props) {
  return (
    <MenuLaterall click={props.clikc}>{props.children}</MenuLaterall>
  )
}