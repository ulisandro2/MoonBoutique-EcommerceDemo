
import './index.css';
import Navbar from './Componets/Navbar';
import Home from './Componets/Home';
import { BrowserRouter , Routes ,Route, Navigate } from 'react-router-dom';
// import ProductsList from './Componets/ProductsList';
import InstagramGallery from './Componets/InstagramGallery';
import MidSection from './Componets/MidSection';
import Footer from './Componets/Footer';


function App() {
  return <div className='App'>
    <BrowserRouter>
    <Navbar />
    <Routes>
         
        <Route path='/' element={<Home/>}  />
        
        {/* <Route path='/products' element={<ProductsList/>} /> */}
        
        
      </Routes>
      <MidSection />
      <InstagramGallery />
      <Footer />
     </BrowserRouter>

  </div>
  
}

export default App;
