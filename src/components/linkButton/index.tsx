import {
  LinkButtonn
} from './style';

type Props = {
  to: string,
  text: string,
}

export function LinkButton(props: Props) {
  return (
    <LinkButtonn href={props.to}>{props.text}</LinkButtonn>
  );
}