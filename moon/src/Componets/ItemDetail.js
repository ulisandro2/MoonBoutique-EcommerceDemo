import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { CartContext } from '../context/CartContext'
import ItemCount from './ItemCount';


const ItemDetail = ( {product} ) => {
  
  const [amount ,setAmount] = useState()
  const {AddToCart} = useContext(CartContext)

  const onAdd = (amount) => {
    setAmount(amount , product);
    AddToCart(amount , product);
  }
  
  
  return (
      <StyleDetail>
        <div className='details'>
               <div className='big-img'>
                  <img alt='' src={product.img}/>
               </div>
               <div className='box'>
                  <div className='row'>
                     <h2>{product.title}</h2>
                     <span>${product.price}</span>
                     <div >
                      { amount ?
                       <Link to="/Cart" >
                       <button className='btnCarrito'>Ir al Cart</button>
                       </Link>
                       :
                       <ItemCount initial={1} stock={20} onAdd={onAdd} />  
                      } 
                   </div>
                  </div>
                  <div className='thumb'>
                  <img alt='' src={product.img}/>
                  <img alt='' src={product.img}/>
                  <img alt='' src={product.img}/>
                  </div>
                 
                  
                 
                   

               </div>
             </div>
        </StyleDetail>


    





  )
}

const StyleDetail = styled.div`
 max-width: 1400px;
 width: 100%;
 margin: 30px auto;
 box-shadow: 0 0 5px #ccc;

 .details{
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 30px 0;
  margin-top: 140px;
  max-width: 1400px;
 width: 100%;

 box-shadow: 0 0 5px #ccc;
 }

 .details .big-img{
  max-width: 500px;
  min-width: 220px;
  overflow: hidden;
  margin: 25px;

 }
 .big-img img{
  width: 100%;
  height: 100%;
  max-width: 400px;
  display: block;
  object-fit: cover;
 }

 .details .box{
  max-width: 500px;
  min-width: 290px;
  margin: 25px;

 }

 .box .row{
  display: flex;
  justify-content: space-around;
  margin-bottom: 15px;
 }

 .box .row h2{
  text-transform: uppercase;
  letter-spacing: 2px;
 }

 .box .row span{
  color: red;
 }

 .thumb{
  width: 100%;
  height: 100%;
  display: flex;
  margin: 10px 0 ;
 }

 .thumb img{
  width: 170px;
  height: 170px;
  display: block;
  object-fit: cover;
  border: 1px solid #ddd;
  margin-right: 5px;
  opacity: 0.7;
  border-radius: 5px;
 }


 @media screen and (max-width: 500px) {
  

    .thumb{
      height: 150px;
    }

    .thumb img{
      width:80px
    }

    /* .details .big-img{
  max-width: 500px;
  min-width: 290px;
  overflow: hidden;
  margin: 25px;

 } */
 }




`

export default ItemDetail