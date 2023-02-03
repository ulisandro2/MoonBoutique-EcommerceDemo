import React from 'react'
import "../css/StyleItemList.css"
import Item from './Item'


const ItemList = ({product}) => {
  return (
    <div className='itemList'>
      
     {product.map((product) => <Item key={product.id} product={product}/> )}
     
     </div>
  );
}









export default ItemList