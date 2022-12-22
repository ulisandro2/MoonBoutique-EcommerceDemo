import React from 'react'
import Fondo from '../imagenes/top y cartera.jpg'
import '../css/StyleHome.css'
import foto1 from '../imagenes/vestidoRosa.jpg'
import foto2 from '../imagenes/topRosa.jpg'




const Home = () => {
  
  let frase1 = 'Nuevos ingresos!'
  let frase2 = 'Verano 22/23'

  return (
    <body >
    <div className='fondo'>
      <img src={Fondo}/>
    </div>
     
    
 <div className='container'> 
   <div className='image1' style={{ 
      backgroundImage: `url(${foto1})` 
    }}>
      <div className='frase1'>
        <h2 >{frase1}</h2>
        <button type="button" className="btn btn-outline-dark boton">Shop</button>
       </div>
       </div>
       

       <div className='image2' style={{ 
      backgroundImage: `url(${foto2})` 
    }}>
      <div className='frase2'>
        <h2 >{frase2}</h2>
        <button type="button" className="btn btn-outline-dark boton">Shop</button>
       </div>
       </div>

       </div>


       <div>
        <ul>
          <li>remeras </li>
          <li>remeras </li>
          <li>remeras </li>
          <li>remeras </li>
          
        </ul>
       </div>

    
   
  </body>
)
}





export default Home