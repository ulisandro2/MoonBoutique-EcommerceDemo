import React from 'react'
import styled from 'styled-components';
import Item from './Item'


const ItemList = ({product}) => {
  return (
    <List>
      
     {product.map((product) => <Item product={product}/> )}
     
     </List>
  );
}


const List = styled.div`
display: flex;
justify-content: center;
 align-items: center;
 margin-top: 20px;
 text-align:center ;
 flex-wrap: wrap;


`


export default ItemList