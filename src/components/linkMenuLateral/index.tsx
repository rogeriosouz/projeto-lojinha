import { MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';
import { LinkDoMenu } from './style';

type Props = {
  to: string,
  text: string
  click?: MouseEventHandler
}

export function LinkMenuLateral(props: Props) {
  return (
    <LinkDoMenu onClick={props.click}>
      <Link to={props.to}>{props.text}</Link>
    </LinkDoMenu>
  );
}