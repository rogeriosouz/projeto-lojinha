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
}

export function CampoForm(props: Props) {
  return (
      <ContaineCampo color={props.color}>
        <label htmlFor={props.typeCampo}>{props.nameLabel}:</label>
        <input autoFocus={props.autofocus} type={props.typeCampo} id={props.typeCampo} onChange={props.onChanger} />
      </ContaineCampo>
  );
}