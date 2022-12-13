
import './index.css';
import Navbar from './Componets/Navbar';
import Home from './Componets/Home';
import { BrowserRouter , Routes ,Route, Navigate } from 'react-router-dom';
import ProductsList from './Componets/ProductsList';


function App() {
  return <div className='App'>
    <BrowserRouter>
    <Navbar />
    <Routes>
         
        <Route path='/' element={<Home/>}  />
        
        <Route path='/products' element={<ProductsList/>} />
        
        
      </Routes>
     </BrowserRouter>
       </div>
  
}

export default App;
