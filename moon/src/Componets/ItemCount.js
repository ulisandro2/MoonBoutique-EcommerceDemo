import React, { useState } from 'react'

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
    <div>
         <div className="contador">
            <h2 className="tituloContador">Total productos = {count}</h2>
            <button className="btnCountMas" onClick={Add}>+</button>
            <button className="btnCountMenos" onClick={Delete}>-</button>
            <button className="btnCount" onClick={AddProduct}>Agregar</button>
            </div>
       </div>
  )
}

export default ItemCount