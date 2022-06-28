import React from 'react'
import Item from '../Item/Item'
import Louder from '../Louder/Louder'

const ItemList = ({productos}) => {

  return (
    <div>
        {productos.length > 0 ? (
            <div className=''>
                <div className='container-fluid d-flex text-center justify-content-envenly'>
                    {productos.map((producto) => (
                        <Item 
                        key={producto.id}
                        id={producto.id}
                        nombre={producto.nombre}
                        imagen={producto.imagen}
                        />
                    ))}
                </div>
            </div>
        ) : (
            <h1 className='container-fluid d-flex justify-content-evently my-5'>
                <Louder/>
            </h1>
        )}
    </div>
  )
}

export default ItemList