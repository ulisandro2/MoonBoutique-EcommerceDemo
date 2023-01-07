import React,{useState} from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import styled from 'styled-components'
import LeftNav from './LeftNav'


const Burguer =styled.div`
   
    height: 28px;
    width: 28px;
    color: #0f0e0e;
    padding: 0px;
    margin: 0 15px;
    
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;

div{
    width: 2rem;
    height: 0.25rem;
   
    background-color: ${({open})=> open ? '#ece5e5' : '#070707'};
    transform-origin:1px ;
    border-radius: 10px;
    transition: all 0.3s linear;


   &:nth-child(1){
    transform: ${({open}) => open ? 'rotate(37deg)' : 'rotate(0)' };
   }

   &:nth-child(2){
    transform: ${({open}) => open ? 'translateX(100%)' : 'translateX(0)' };
    opacity: ${({open }) => open ? 0 : 1} ;
   }

   &:nth-child(3){
    transform: ${({open})=> open ? 'rotate(-37deg)' : 'rotate(0)' };
   }

}

`

const StyleBurguer = () => {

const [open ,setOpen ] =useState(false)

  return (
    <>
    <LeftNav open={open}/>
    <Burguer  open={open} onClick={()=> setOpen(!open)}>
    {/* <GiHamburgerMenu className="icon"  /> */}
    
    <div></div>
    <div></div>
    <div></div>
   
    </Burguer>
    
    </>
  )
}

export default StyleBurguer