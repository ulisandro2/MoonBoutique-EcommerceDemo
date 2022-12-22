import React from 'react'


const Item = ({product}) => {
  return (
    <div>
      <h1> {product.price}</h1>
         <p>{product.title}</p> 

         <h1>Remra</h1>
         <p>comprar</p>
    </div>
  )
}

export default Item