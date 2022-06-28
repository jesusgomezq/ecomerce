import React from 'react'

const Louder = () => {
  return (
    <div
     className='spinner-grow' style={{width: "3rem", height: "3rem", padding: "3rem"}} role="status">
        <span className='visually-hidden'>Louding...</span>
     </div>
  )
}

export default Louder