import React from 'react'


// Esta funcion nos mustra el carrito y todas sus operacones
const Cartwidges = ({ Icon, color, size}) => {
  return (
    <div>
      {<Icon style={{ color: color, fontSize: size }} /> }
    </div>
  )
}

export default Cartwidges