import React ,{useEffect,useState}from 'react'
import { useParams } from 'react-router-dom';
import ItemList from '../Componets/ItemList.js'
import { collection,getDocs,getFirestore,query,where } from 'firebase/firestore';






const ItemListContainer = () => {
  
 const [product , setProducts] = useState([]);
 const {id} = useParams();
 
 useEffect(()=>{
   
    const db = getFirestore();
    const queryCollection = collection(db,'items');

    getDocs(
      id ? query(queryCollection , where('category', '==' ,id)): queryCollection
    )
    .then((resp)=> setProducts(resp.docs.map((item)=> ({id : item.id, ...item.data()})))
    )
    .catch((err) => console.log(err))
     
}, [id]);



 

  return (
    <ItemList product={product}/>
  )
}

export default ItemListContainer