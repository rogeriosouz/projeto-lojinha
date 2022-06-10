import { ReactNode } from 'react';

import {
  FlasMsgs  
} from './style';

type Props = {
  children: ReactNode,
  cor: string,
}

export function FlashMsg(props: Props) {
  return (  
    <FlasMsgs color={props.cor}>
      {props.children}
    </FlasMsgs>
  )
}