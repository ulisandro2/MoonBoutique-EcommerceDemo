import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import '../css/StyleItem.css';



const Item = ({product}) => {

  const {AddToCart} = useContext(CartContext)
  const onAdd = (amount) => {
    AddToCart(amount,product)
  }

  return (
    
            <div className='wrapper'>
          <div className='card'>
            <img src={product.img} className='card-img'/>
            <div className='card-body'>
              <h2 className='card-title'>{product.title}</h2>
              {/* <p className='card-description'>{product.category}</p> */}
              <h3 className='card-price'>{product.price}</h3>
              <Link style={{textDecoration:'none', listStyle:"none"}} to={`/detail/${product.id}`} >
              <button  className='card-btn'>Detalle</button>
              </Link>
            </div>
          </div>
          </div> 




   

   
  )
}



export default Item