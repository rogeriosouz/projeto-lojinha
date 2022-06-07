import { TitleForm } from './style';

type Props = {
  title: string,
  color?: string,
}

export function TitleForms(Props: Props) {
  return (
    <TitleForm color={Props.color}>
        <h1>{Props.title}</h1>
    </TitleForm>
  );
}
