import React from 'react'
import { CartContext, UseCartContext } from '../context/CartContext'

const CartItem = ({product,amount}) => {

  const {DelItem} = UseCartContext(CartContext)
   


  return (
    <>
    <div >
        <h2>{product.title}</h2>
        <p>precio del producto ${product.price}</p>
        <p>cantidad{amount}</p>
        
        
        
    </div>
    </>
  )
}

export default CartItem