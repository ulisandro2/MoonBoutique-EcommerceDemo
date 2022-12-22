import React ,{useEffect,useState}from 'react'
import ItemDetail from '../Componets/ItemDetail.js'

const dataFake = [
    {id:1 , title:'Top rosa'
    ,price:1500
  
  }
]

const ItemDetailContainer = () => {
   
    const [dataDetail ,setData] =useState([]);

   useEffect(()=>{
    const getData = new Promise(resolve =>{
        setTimeout(()=>{
            resolve(dataFake);
        },2000);
    });

    getData.then(res => setData(res));
   },[])
  
    return (
    <ItemDetail dataDetail={dataDetail}/>
  )
}

export default ItemDetailContainer