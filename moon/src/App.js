
import './index.css';
import Navbar from './Componets/Navbar';
import Home from './Componets/Home';
import { BrowserRouter , Routes ,Route, Navigate } from 'react-router-dom';

import ItemListContainer from './Containers/ItemListContainer';
import ItemDetailContainer from './Containers/ItemDetailContainer';
// import CartProvider from './context/CartContext.jsx'


function App() {
  return <div className='App'>
    <BrowserRouter>
    {/* <CartProvider> */}
    
    
    <Navbar />
      <Routes>
         
        
        <Route path='/' element={<Home/>}  />
       
        <Route path='products' element={<ItemListContainer/>}>
             <Route path='category/:id' element={<ItemListContainer/>}  />
             
          </Route>

        <Route path='/detail' element={<ItemDetailContainer/>} />
      </Routes>
{/*       
      </CartProvider> */}

      
     </BrowserRouter>
       </div>
  
}

export default App;
