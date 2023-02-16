import React from 'react'
import '../css/StyleHome.css'
import foto1 from '../imagenes/vestidoRosa.jpg'
import foto2 from '../imagenes/topRosa.jpg'
import MidSection from './MidSection'
import InstagramGallery from './InstagramGallery'
import MainBackground from './MainBackground'
import { Link } from 'react-router-dom'





const Home = () => {
  
  let frase1 = 'Nuevos ingresos!'
  let frase2 = 'Verano 22/23'

  return (

    <>

    <MainBackground/>
    <body>
      <div className='container'> 

        <div className='image1' style={{ 
        backgroundImage: `url(${foto1})` 
        }}>
          <div className='frase1'>
           <h2 >{frase1}</h2>
           <Link to='/products'> <button className='btnFrase'>Shop</button></Link>
          </div>
        </div>

        <div className='image2' style={{ 
        backgroundImage: `url(${foto2})` 
        }}>
          <div className='frase2'>
            <h2 >{frase2}</h2>
        <Link to='/products'>    <button className='btnFrase'>Shop</button> </Link>
            
          </div>
        </div>



   
    
   

      </div>  
      <MidSection/>
     <InstagramGallery/>


  

  </body>

  </>
)
}





export default Home