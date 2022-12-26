
import './index.css';
import Navbar from './Componets/Navbar';
import Home from './Componets/Home';
import { BrowserRouter , Routes ,Route, Navigate } from 'react-router-dom';
import ItemListContainer from './Containers/ItemListContainer';
import ItemDetailContainer from './Containers/ItemDetailContainer';
import Footer from './Componets/Footer';
import MainBackground from './Componets/MainBackground';
import Borders from './Componets/Borders';


function App() {
  return <div className='App'>
    <BrowserRouter>
<<<<<<< HEAD
    <Navbar />
    <Routes>
         
    <Route path='/' element={<Home/>}  />

                      
       <Route path='products' element={<ItemListContainer/>}>
            <Route path='category/:id' element={<ItemListContainer/>}  />
            
         </Route>
=======
      <Navbar />
      <MainBackground />
>>>>>>> 0706de21cdb906e993d860a99175f9e971987f03

      <Routes>     
        <Route path='/' element={<Home/>}  />

        <Route path='products' element={<ItemListContainer/>}>
          <Route path='category/:id' element={<ItemListContainer/>}  />
        </Route>

        <Route path='/detail' element={<ItemDetailContainer/>} />
      </Routes>
        
<<<<<<< HEAD
        
     
      
=======
      <MidSection />
      <InstagramGallery />
>>>>>>> 0706de21cdb906e993d860a99175f9e971987f03
      <Footer />
      <Borders />
    </BrowserRouter>

  </div>
  
}

export default App;
