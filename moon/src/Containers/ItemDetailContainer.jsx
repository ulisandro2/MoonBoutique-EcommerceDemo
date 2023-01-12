import { getDoc, getFirestore ,doc} from 'firebase/firestore';
import React ,{useEffect,useState}from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../Componets/ItemDetail.js'



const ItemDetailContainer = () => {
   
    const [product ,setProduct] =useState([]);

    const {id} = useParams()

   useEffect(()=>{

    const db = getFirestore()
    const queryItem = doc(db , 'items' , id)
    getDoc(queryItem)
    .then(resp => setProduct( {id:resp.id , ...resp.data()}))
    
   },[id])
  
    return (<>
    <ItemDetail product={product}/>
    </>
  )
}

export default ItemDetailContainer