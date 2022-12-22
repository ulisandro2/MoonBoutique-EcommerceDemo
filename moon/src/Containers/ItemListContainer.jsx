import React ,{useEffect,useState}from 'react'
import { useParams } from 'react-router-dom';
import ItemList from '../Componets/ItemList.js'
import { collection,doc,getDocs,getFirestore,query,where } from 'firebase/firestore';
// import db from '../firebase/config';



// const film = [
//     {id:1 , image:'https://www.instagram.com/p/CkJVvahuIlg/?utm_source=ig_web_button_share_sheet' , title:'Top rosa'
//     ,price:1500
  
//   },
//     {id:2 , image:'https://www.instagram.com/p/CkJVvahuIlg/?utm_source=ig_web_button_share_sheet' , title:'Top negro'
//     ,price:2500
  
//   },
//     {id:3 , image:'https://www.instagram.com/p/CkJVvahuIlg/?utm_source=ig_web_button_share_sheet' , title:'Top azul'
//     ,price:1000 
//   }
// ]

const ItemListContainer = () => {
  
 const [product , setProducts] = useState([]);
 const {id} = useParams();

 useEffect(()=>{
     const db = getFirestore()
     const queryCollection = collection(db , 'items');

     getDocs(id ? query(queryCollection,where('category' ,'==' ,id )) : queryCollection)
     .then((resp)=> setProducts(resp.docs.map((item)=> ({id : item.id , ...item.data()}))))
          
     console.log(product)
}, [id]);



 

  return (
    <ItemList product={product}/>
  )
}

export default ItemListContainer