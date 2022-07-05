import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemListContainer from '../Components/ItemListContainer/ItemListContainer'

const Rutas = () => {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route index element={<ItemListContainer/>}/>
        </Routes>
    </BrowserRouter>
    </>
    
  )
}

export default Rutas