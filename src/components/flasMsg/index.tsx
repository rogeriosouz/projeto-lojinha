import { useState } from 'react';
import { ReactNode } from 'react';

import {
  FlasMsgs  
} from './style';

type Props = {
  children: ReactNode,
  duration: number,
  cor: string,
}

export function FlashMsg(props: Props) {
  const [amostrar, setAmostrar] = useState(true);
 
  setTimeout(() => {
    setAmostrar(false);
  }, props.duration)


  return (
    <>
      {amostrar ? (
        <FlasMsgs color={props.cor}>
          {props.children}
        </FlasMsgs>
      ): ''}  
    </> 
  )
}