import { ChangeEventHandler } from 'react';

import {  
  ContaineCampo
} from './style';

type Props = {
  nameLabel: string,
  typeCampo: string,
  onChanger: ChangeEventHandler,
  autofocus?: boolean,
  color?: string,
  placeholder?: string
}

export function CampoForm(props: Props) {
  return (
      <ContaineCampo color={props.color}>
        <label htmlFor={props.typeCampo}>{props.nameLabel}:</label>
        <input placeholder={props.placeholder} autoFocus={props.autofocus} type={props.typeCampo} id={props.typeCampo} onChange={props.onChanger} />
      </ContaineCampo>
  );
}