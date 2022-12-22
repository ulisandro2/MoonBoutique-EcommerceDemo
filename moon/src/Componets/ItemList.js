import React from 'react'
import Item from './Item'


const ItemList = ({product}) => {
  return (
     product.map((product) => <Item product={product}/> )
  );
}

export default ItemList