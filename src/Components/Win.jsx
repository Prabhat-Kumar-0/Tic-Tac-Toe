import React from 'react'

function Win({no}) {
  return (
    <div className='absolute '>
        {
            no === 1 && <h1 className='font-semibold text-6xl'>Player {no} Wins</h1>
        }
        {
            no === 2 && <h1 className='font-semibold text-6xl'>Player {no} Wins</h1>
        }
        {
            no === -2 && <h1 className='font-semibold text-6xl'>Game Draw</h1>
        }
        
    </div> 
  )
}

export default Win