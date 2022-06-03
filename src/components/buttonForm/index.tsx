import { MouseEventHandler } from 'react';
import { ButtonForm } from './style';

type Props = {
  name: string,
  onClick?: MouseEventHandler
}

export function ButtonForms(props: Props) {
  return (
    <ButtonForm>
      <button onClick={props.onClick} type='submit'>{props.name}</button>
    </ButtonForm>  
  );
}