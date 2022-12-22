import React from 'react'

const ItemDetail = ( {dataDetail} ) => {
  return (
      <div className='container'>
        <p>Precio ${dataDetail.price}</p>
        <h1>{dataDetail.title}</h1>
      </div>
  )
}

export default ItemDetail