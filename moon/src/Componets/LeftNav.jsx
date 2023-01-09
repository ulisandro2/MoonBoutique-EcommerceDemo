import React from 'react'
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
        <li>Inicio</li>
        <li>Productos</li>
        <li>Verano 23</li>
        <li>Info</li>
        <li>Contacto</li>
    </Ul>
  )
}

export default LeftNav