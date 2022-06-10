import { MenuLaterall } from './style';

type Props = {
  children: string;
}

export function MenuLateral(props: Props) {
  return (
    <MenuLaterall>{props.children}</MenuLaterall>
  )
}