import {  
  ContaineCampo
} from './style';

type Props = {
  nameLabel: string,
  typeCampo: string,
  onChanger: any,
  autofocus?: any
}

export function CampoForm(props: Props) {
  return (
      <ContaineCampo>
        <label htmlFor={props.typeCampo}>{props.nameLabel}:</label>
        <input autoFocus={props.autofocus} type={props.typeCampo} id={props.typeCampo} onChange={props.onChanger} />
      </ContaineCampo>
  );
}