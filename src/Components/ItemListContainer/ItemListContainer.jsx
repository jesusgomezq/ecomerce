import React, { useEffect, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { item } from '../Config/Index'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {
 const [productos, setProductos] = useState([])

  useEffect(() => {
    
    const pedir = new Promise((resolve, reject) => {
      setTimeout(() =>{
        resolve(item)
      }, 2000)
    });

    pedir
    .then((res) => {
      setProductos(res)
    })
    .then(() => console.log(productos))
    .catch((err) => console.log(err))
    console.log(productos);
  }, [])
  
  

  return (
    <div className='text-center d-flex justify-content-center'>
       {<ItemList productos={productos}/>}
    </div>
  )
}

export default ItemListContainer