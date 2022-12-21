import React,{useState,useContext} from 'react'
 const CartContext = React.createContext([]);

 
 
export const useCartContext =() => useContext(CartContext)

const CartProvider = ({children}) => {

const [cart ,setCart] = useState([]);





const clearCart = () => setCart([]);

const removeProduct = (id) => setCart(cart.filter(product => product.id !==id))

const isInCart = (id) => cart.find(product => product.id === id) ? true :false;


  return (
    <CartContext.Provider value={{
        clearCart , isInCart , removeProduct 
    }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider