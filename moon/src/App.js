
import './index.css';
import Navbar from './Componets/Navbar';
import Home from './Componets/Home';
import { BrowserRouter , Routes ,Route,  } from 'react-router-dom';
import ItemListContainer from './Containers/ItemListContainer';

import Footer from './Componets/Footer';
import MainBackground from './Componets/MainBackground.js'
import Borders from './Componets/Borders';
import Collection from './Componets/Collection';


function App() {
  return <div className='App'>
    <BrowserRouter>
    <Navbar />
    <MainBackground/>
    <Routes>
    <Route path='/' element={<Home/>}/>
           
          <Route path='products' element={<ItemListContainer/>}>
          <Route path='category/:id' element={<ItemListContainer/>}  />
            
         </Route>
    </Routes>
    <Collection />

    <Footer />
    <Borders />
    </BrowserRouter>

  </div>
  
}

export default App;
