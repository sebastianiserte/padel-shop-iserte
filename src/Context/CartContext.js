import { createContext, useState } from "react"


 export const CartContext = createContext({})


 function CartProvider({defaultvalue=[], children}) {
    
    const [cart, setCart] = useState(defaultvalue);


    //funciones
    const isInCart = (id)=>cart.find((obj)=>obj.id===id);
    
    const addToCart =(obj,quantity)=>{
        if (isInCart(obj.id)){
            alert("El Item ya esta en el carrito");
        } else {
            obj["cantidad"]=quantity;
            setCart([...cart,obj]);
        }        
    }

    const removeFromCart =(id)=>{
        console.log("removeFromCart", id);
        console.log(isInCart(id));

        if (isInCart(id)){
            const carrito = cart.filter((obj)=>obj.id!=id)
            console.log("remove ", carrito);
            setCart(carrito);
        } else {
            console.log("El Item no esta en el carrito");
        }
    }

    const clear = ()=>{
        console.log("clear");
        setCart([]);
    }

    const context = {
        cart, 
        addToCart, 
        isInCart, 
        removeFromCart, 
        clear
    }

  return (
      <>
        <CartContext.Provider value={context}>
            {children}
        </CartContext.Provider>
      </>

  )
}
export default CartProvider