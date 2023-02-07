import React from 'react'

import styled from 'styled-components'
import { CartContext, UseCartContext } from '../context/CartContext'

const CartItem = ({product,amount}) => {
  
  
  const {DelItem} = UseCartContext(CartContext)



  return (
    <CartContainer>
    <div className='titles'>
      <h3 className='product-title'>Products</h3>
      <h3 className='price'>Price</h3>  
      <h3 className='Quantity'>Quantity</h3>
      <h3 className='total'>Total</h3> 
    </div>
    <div className='cart-items'>
      <div className='cart-item' key={product.id}>
        <div className='cart-product'>
          <img alt='' src={product.img}/>
          <div className='cart-title'>
            <h3>{product.title}</h3>
            <button onClick={()=> {{DelItem()}}}>Remove</button>
          </div>
        </div>
        <div className='cart-product-price'>${product.price}</div>
          <div className='cart-product-quantity'>{amount}</div>
          <div className='cart-price-total'>${product.price * amount}</div>
         
      </div>
    </div>
    </CartContainer>
  )
}
const CartContainer = styled.div`
padding:2rem 4rem;



@media screen and (max-width:650px) {

  padding: 0.2rem;
  display: flex;
  flex-direction: column-reverse;
  

  .titles .product-title ,.price ,.Quantity , .total{
  display: none;
   }
       
 
.cart-item .cart-product h3{
  font-weight: 400;
  font-size: 17px;
}

.cart-product-price , .cart-product-quantity, .cart-price-total{
   padding-top: 120px;
   
}

.cart-item .cart-product button{
  margin-top: 0.3rem;
}



}



.titles{
  margin: 2rem 0 1rem 0 ;
 
}

.titles h3{
  font-size: 20px;
  font-weight: 400;
  text-transform: uppercase;
}

.cart-item , .titles{
  display: grid;
  align-items: center;
  grid-template-columns: 3fr 1fr 1fr 1fr;
  column-gap: 0.5rem;

}

.cart-item{
  border-top: 1px solid black;
  padding: 1rem 0 ;
}

.titles .product-title{
  padding-left: 0rem;
}

.cart-item .cart-product{
  display: flex;
}

.cart-item .cart-product img{
  width: 100%;
  max-width: 200px;
  margin-right: 1rem;
}

.cart-item .cart-product h3{
  font-weight: 500;
}

.cart-item .cart-product button{
  border: none;
  outline: none;
  
  cursor: pointer;
  background: none;
  color: gray;
}

.cart-item .cart-product button:hover{
  color: black;
}

.cart-price-total{
  font-weight: 700;
}

/* .cart-product-price , .cart-product-quantity, .cart-price-total{
   font-size: 20px;
} */

`

export default CartItem