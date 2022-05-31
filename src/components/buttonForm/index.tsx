import { ButtonForm } from './style';

type Props = {
  name: string,
  onClick: any,
}

export function ButtonForms(props: Props) {
  return (
    <ButtonForm>
      <button onClick={props.onClick}>{props.name}</button>
    </ButtonForm>  
  );
}