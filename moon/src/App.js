
import './index.css';
import Navbar from './Componets/Navbar';
import Home from './Componets/Home';
import { BrowserRouter , Routes ,Route, Navigate } from 'react-router-dom';
// import ProductsList from './Componets/ProductsList';
import InstagramGallery from './Componets/InstagramGallery';
import MidSection from './Componets/MidSection';
import ItemListContainer from './Containers/ItemListContainer';
import ItemDetailContainer from './Containers/ItemDetailContainer';
import Footer from './Componets/Footer';


function App() {
  return <div className='App'>
    <BrowserRouter>
    <Navbar />
    <Routes>
         
    <Route path='/' element={<Home/>}  />
       
       <Route path='products' element={<ItemListContainer/>}>
            <Route path='category/:id' element={<ItemListContainer/>}  />
            
         </Route>

       <Route path='/detail' element={<ItemDetailContainer/>} />
     </Routes>
        
        
     
      <MidSection />
      <InstagramGallery />
      <Footer />
     </BrowserRouter>

  </div>
  
}

export default App;
