import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import CartItem from './CartItem'




const Cart = () => {
 
  const {cart , EmptyCart, PriceTotal ,IconCart,} = useContext(CartContext)

if(cart.length < 1){  
  return (
    <div>no hay productos</div>
  )
}else{
  return(  
  <div>
    <h1>Carrito</h1>
    
     
  <div> 
      {
      cart.map((i) => <CartItem key={i.product.id} product={i.product} amount={i.amount}  />)
      }
    </div> 


  </div>
  )
}






}


export default Cart