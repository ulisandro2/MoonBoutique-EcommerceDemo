import React, {useState} from 'react'
import Logo from '../imagenes/Moon-white-sin-b.png';
import '../css/StyleNavbar.css';
import { GiShoppingBag} from 'react-icons/gi';
import StyleBurguer from './StyleBurguer';
import { Link } from 'react-router-dom';
import { UseCartContext } from '../context/CartContext';


const Navbar = () => {
 
    const {cart , IconCart} = UseCartContext()
 
  const[navbar , setNavbar] = useState(false);
  const changeBackground = () => {
    if(window.scrollY >= 500){
      setNavbar(true);
    }
    else{
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', changeBackground);





  return (
    <>
    <header >
      <div className={navbar ? 'header-container active' : 'header-container'} >
        <section className="section-advertising"><h6 className="info__text">6 cuotas sin interes / 10% off efectivo </h6></section>
        <nav className="nav-container" >
          <div className="nav-container__columnas">
            <div className="col">
              <div className="col__laterales jc-start">
            
             
                {/* <GiHamburgerMenu className="icon"  /> */}
                <StyleBurguer/>
             
             
              </div>
            </div>

            <div className="col">
              <div className="logo">
                <a alt='' href="#"><img alt='' src={Logo} className="moon"></img></a>
              </div>
            </div>

            <div className="col">
              <div className="col__laterales jc-end">
                <Link to="cart" style={{textDecoration:'none',}}>
                <GiShoppingBag className="icon" color='white'/>
                <span className='cart-count'>{cart.length < 1 ? "" : <p>{IconCart()}</p>}</span>
                
                </Link>
              </div>  
            </div>
          </div>
        </nav>
      </div>
    </header>

   


    </>


  )
}

export default Navbar



