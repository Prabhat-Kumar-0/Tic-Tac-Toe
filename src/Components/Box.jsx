import React from 'react'
import Circle from './Circle'
import Cross from './Cross'
import { useEffect } from 'react';

function Box({id}) {
  
 

  return (
    <div className={`bg-zinc-900 h-[105px] w-[105px] rounded-md  ${id === -1 ? 'hover:bg-slate-900' : null}`}>

      {id === -1 && null}
      {id === 0 && <Circle />}
      {id === 1 && <Cross />}

    </div>
  )
}

export default Box