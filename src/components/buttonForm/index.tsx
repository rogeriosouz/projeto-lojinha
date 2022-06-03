import { ButtonForm } from './style';

type Props = {
  name: string,
}

export function ButtonForms(props: Props) {
  return (
    <ButtonForm>
      <button type='submit'>{props.name}</button>
    </ButtonForm>  
  );
}