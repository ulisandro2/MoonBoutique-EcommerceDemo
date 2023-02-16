import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Ul =styled.ul`
    list-style: none;
    display: flex;
    flex-flow: column nowrap;
    background-color: #1a1818;
    width: 500px;
    border-radius: 30px;
    height: 900px;
   position: fixed;
   top: 0;
   padding-top: 8.5rem;
   transform: ${({open })=> open ? 'translateX(0)' : 'translate(-120%)'};
   transition: transform 0.3s ease-in-out;


   @media screen and (max-width:760px) {
    
       height:800px;
       width: 300px;

   }
   
    
 li{
    padding: 18px 10px;
    color: white;
 }

`
 
const LeftNav = ({open}) => {
  return (
    <Ul open={open}>
   <Link to='/' style={{textDecoration:'none',}}> <li>Inicio</li></Link> 
   <Link to='products' style={{textDecoration:'none',}}> <li>Productos</li></Link> 
   <Link to='/info' style={{textDecoration:'none',}}> <li>Info</li></Link>   
   <Link to='/contact' style={{textDecoration:'none',}}>  <li>Contacto</li></Link> 
    </Ul>
  )
}

export default LeftNav