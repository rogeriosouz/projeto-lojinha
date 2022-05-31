import { ButtonForm } from './style';
import { MouseEventHandler } from 'react';

type Props = {
  name: string,
  onClick: MouseEventHandler,
}

export function ButtonForms(props: Props) {
  return (
    <ButtonForm>
      <button onClick={props.onClick}>{props.name}</button>
    </ButtonForm>  
  );
}