import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { CartContext } from '../context/CartContext'
import ItemCount from './ItemCount'


const ItemDetail = ( {product} ) => {
  
  const [amount ,setAmount] = useState()
  const {AddToCart} = useContext(CartContext)

  const onAdd = (amount) => {
    setAmount(amount , product);
    AddToCart(amount , product);
  }
  
  
  return (
      <Container>
        <p>Precio ${product.price}</p>
        <h1>{product.title}</h1>
        {amount ? 
        <Link to='/cart'>
          <button>ir al cart</button>
        </Link>
        : <ItemCount initial={1} stock={10} onAdd={onAdd} />}
        </Container>
  )
}

const Container = styled.div`
padding-top:200px ;

`

export default ItemDetail