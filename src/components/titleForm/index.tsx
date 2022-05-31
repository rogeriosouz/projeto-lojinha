import { TitleForm } from './style';

type Props = {
  title: string,
}

export function TitleForms(Props: Props) {
  return (
    <TitleForm>
        <h1>{Props.title}</h1>
    </TitleForm>
  );
}
