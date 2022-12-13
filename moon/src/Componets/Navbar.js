import React, {useState} from 'react'
import Logo from '../imagenes/Moon-white-sin-b.png'
import '../css/StyleNavbar.css'
import styled from 'styled-components';
import BurguerButton from './BurguerButton';
import { Link } from 'react-router-dom';


const Navbar = () => {
 
 const [clicked , setClicked] = useState(false)
    
 const handleClick = () =>{
    
    setClicked(!clicked)

 }
 
 return (
    <div id='navbar'>
   
       <NavContainer>
        <div className={`links ${clicked ? 'active' : ''} ` }>
        <Link style={{textDecoration:'none',}} to='/'>Inicio</Link>
        <Link style={{textDecoration:'none',}} to='/products'>Productos</Link>
            <a href='/'>Contacto</a>
            <a href='/'>Informacion</a>
        </div>
        <div className='burguer'>
       <BurguerButton clicked={clicked} handleClick={handleClick} />
       </div>
        <div className='logo'>
            <img src={Logo}></img>
        </div>
        <BgDiv className={`initial ${clicked ? 'active' : ''} ` }/>
       </NavContainer>
    </div>
  )
}

export default Navbar

const NavContainer = styled.nav`
  padding: .4rem;
  background-color: black; 
  
  
  

 .logo{
    display:flex;
    justify-content:center;
    aling-items:center;
 }
 a{
    color:white;
    text-decoration:none;
    margin-right:1rem;
 }

 @media screen and (max-width:479px){

  .logo img{
    width:140px;
    height:60px;
    display:flex;
    justify-content:center;
    aling-items:center;
    
  }

  
    
 }
    
 .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    
    
    a{
      color: white;
      font-size: 2rem;
      display: block;
    }
    
      a{
        font-size: 1rem;
        color: white;
        display: inline;
      }
      display: block;
    }
  
  .links.active{
    width: 100%;
    display: flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    
    

    a{
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
      background-color:black;
      padding:10px;
      border:1px solid white
      
      
    }
    a:hover{
      color:rgb(131, 146, 139);
    }
  }
  
`

const BgDiv = styled.div`
  background-color: black;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index:-1;
  transition: all .6s ease ;
  
  
  &.active{
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
   
    
    
  }
`

