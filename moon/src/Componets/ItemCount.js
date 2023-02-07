import React, { useState } from 'react'
import styled from 'styled-components';


const ItemCount = ({stock,initial,onAdd}) => {

const [count , setCount] = useState(1);

const Add = () => {
    if(count<stock)setCount(count + 1);
}

const Delete = () => {
    if(count>initial)setCount(count -1);
}

const AddProduct = () => {
    onAdd(count)
   
}

  return (
    <Count>
         <div className="contador">
            <h2 className="tituloContador">Total productos = {count}</h2>
            <button className="btnCountMas" onClick={Add}>+</button>
            <button className="btnCountMenos" onClick={Delete}>-</button>
            <button className="btnCount" onClick={AddProduct}>Agregar</button>
            </div>
       </Count>
  )
}

const Count = styled.div`
 
 
  

 .tituloContador{
  font-size: 15px;
 }
  

 .btnCountMas{
  width: 20px;
  margin: 0.2rem;
  letter-spacing: 1.15px;
  border-radius: 5px;
  border: 0.5px solid rgb(187,187,187) ;
  color: gray;
  background: none;
  outline: none;
  cursor: pointer;
 }

 .btnCountMenos{
  width: 20px;
  margin: 0.2rem;
  letter-spacing: 1.15px;
  border-radius: 5px;
  border: 0.5px solid rgb(187,187,187) ;
  color: gray;
  background: none;
  outline: none;
  cursor: pointer;
 }

 .btnCount{
  width: 100px;
  margin: 0.2rem;
  letter-spacing: 1.15px;
  border-radius: 5px;
  border: 0.5px solid rgb(187,187,187) ;
  color: gray;
  background: none;
  outline: none;
  cursor: pointer;
 }



`


export default ItemCount