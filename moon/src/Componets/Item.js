import React from 'react'


const Item = ({product}) => {
  return (
    <div>
      <h1> {product.price}</h1>
         <p>{product.title}</p> 
    </div>
  )
}

export default Item