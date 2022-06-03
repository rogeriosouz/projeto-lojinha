import { Link } from 'react-router-dom';

import {
  LinkButtonn
} from './style';

type Props = {
  to: string,
  text: string,
}

export function LinkButton(props: Props) {
  return (
    <LinkButtonn>
      <Link to={props.to}>{props.text}</Link>
    </LinkButtonn>
  );
}