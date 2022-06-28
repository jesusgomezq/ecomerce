import React from 'react'

const Item = ({
    id, nombre, imagen,color, buttonStyle
}) => {
  return (
    <div className='mx-auto my-3 '>
        <div className={`bg-dark rounded-2 ${color}`} style={{width: "18rem"}}>
            <img src={imagen} className='card-img-top' alt="" />
        </div>
        <div className='card-body bg-dark text-light'>
            <h2 className='card-title'>{nombre}</h2>
            <button className={`btn btn-light ${buttonStyle}`}>Mas informacion</button>
        </div>
    </div>
  )
}

export default Item