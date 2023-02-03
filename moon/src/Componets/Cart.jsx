import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CartContext } from '../context/CartContext';
import CartItem from './CartItem';
import { GrLinkPrevious} from 'react-icons/gr';




const Cart = () => {
 
  const {cart,PriceTotal,IconCart ,EmptyCart} = useContext(CartContext)

if(cart.length < 1){  
  return (

    <CartContainer>
    <div>no hay productos</div>
    </CartContainer>
  )
}else{
  return(  
    <CartContainer>
    <h1>Cart</h1>
    
    
  <div> 
      {
      cart.map((i, index) => (<CartItem key={index} product={i.product}  amount={i.amount} />) )
      }
    </div> 

    <div className='cart-summary'>
      <button onClick={EmptyCart} className='clear-cart'>Clear Cart</button>
      <div className='cart-checkout'>
        <div className='subtotal'>
          <span> Subtotal:</span>
          <span className='amount' > ${PriceTotal()}</span>
          <p>Products selected: {IconCart()}</p>
          <p>Para pagar precione "Checkout"</p>
          <button>Check out </button>
          <div className='continue-shopping'>
            <Link style={{textDecoration:'none',}} to="/products">
             
             <span > <GrLinkPrevious/> Go Shopping</span>
            </Link>
          </div>
        </div>
      </div>

    </div>


  </CartContainer>
  )
}






}

const CartContainer = styled.div`
padding:3rem;
margin-top: 100px;

.cart-summary{
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  border-top: 1px solid rgb(187,187,187);
  padding-top: 2rem;
}

.cart-summary .clear-cart{
  width: 130px;
  max-width: 100%;
  height: 40px;
  font-weight: 400;
  letter-spacing: 1.15px;
  border-radius: 5px;
  border: 0.5px solid rgb(187,187,187) ;
  color: gray;
  background: none;
  outline: none;
  cursor: pointer;
}

.cart-checkout{
  width: 200px;
  max-width: 100%;

}

.cart-checkout .subtotal{
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  flex-direction: column;
}

.cart-checkout .subtotal .amount{
  font-weight: 700;


}


.cart-checkout p{
  font-size: 14px;
  font-weight: 300;
  margin: 0.5rem 0;
}

.cart-checkout button{
  width: 150px;
  height: 50px;
  border-radius: 5px;
  font-weight: 400;
  border: none;
  outline: none;
  cursor: pointer;
  background: #2b2b2b;
  color: white;
  letter-spacing: 1.15px;
}

.continue-shopping{
  margin-top: 1rem;
 


}
.continue-shopping span{
  color: gray;
  text-decoration: none;
  display: flex;
  list-style: none;
  align-items: center;
  
}






`


export default Cart