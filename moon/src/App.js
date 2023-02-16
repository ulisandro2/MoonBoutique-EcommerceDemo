import './index.css';
import Navbar from './Componets/Navbar';
import Home from './Componets/Home';
import { BrowserRouter , Routes ,Route, Navigate } from 'react-router-dom';
import ItemListContainer from './Containers/ItemListContainer';
import Footer from './Componets/Footer';
import Borders from './Componets/Borders';
import Collection from './Componets/Collection';
import CartContexProvider from './context/CartContext';
import ItemDetailContainer from './Containers/ItemDetailContainer';
import Cart from './Componets/Cart';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Info from './Componets/Info';
import Contact from './Componets/Contact';




function App() {

  

  return <div className='App'>
    <CartContexProvider>
    <BrowserRouter>
    <ToastContainer/>
    <Navbar />
    
    <Routes>
    <Route path='/' element={<Home/>}/>
    
          <Route path='products' element={<ItemListContainer/>}> 
           <Route path='category/:id' element={<ItemListContainer/>}  />
           </Route>
          <Route path='/detail/:id' element={<ItemDetailContainer/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/info' element={<Info/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='*' element={<Navigate to='/' />} />
    </Routes>
    <Collection />
    
    <Footer />
    <Borders />
    </BrowserRouter>
    </CartContexProvider>

  </div>
  
}

export default App;
