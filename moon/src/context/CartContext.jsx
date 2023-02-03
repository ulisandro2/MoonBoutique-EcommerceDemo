import React,{useState,useContext ,createContext} from 'react'


 export const CartContext = createContext([]);
export const UseCartContext = () => useContext(CartContext)

const CartProvider = ({children}) => {

const [cart ,setCart] = useState([]);
const [count , setCount ] =useState(1)


const AddToCart = (amount, product) => {
  
  let item = {product,amount};
  let auxCart = [];

  if (IsInCart(product.id)) {
    item = cart.find(e => e.product.id === product.id);
    product.amount += amount;
    auxCart= [...cart]
    
  } else {
       auxCart = [item, ...cart];    
  }
  setCart(auxCart);

}

const DelItem = (id) => {
  const items = cart.filter((product)=> product.id === id);
  return setCart(items)
}


const IconCart = () =>{
  return cart.reduce((acum,i) => acum + i.amount,0)
}

const PriceTotal = () => {
  return cart.reduce((acum,i) => acum + i.amount * i.product.price,0)
}

const IsInCart = (id) => {
  return cart&&cart.some((i) => i.product.id === id);
}


const EmptyCart = () => {
  setCart([])
}

return(



  <CartContext.Provider value={{AddToCart,cart ,EmptyCart,PriceTotal, IconCart,setCount,count,DelItem}}>

    {children}
  </CartContext.Provider>
)


}

export default CartProvider