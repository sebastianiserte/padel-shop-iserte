import { useContext } from "react"
import { CartContext } from "../Context/CartContext"

function Cart() {

  const {cart, removeFromCart,clear} = useContext(CartContext)

  console.log("carrito ",cart);

  return (
    <div>
      <h1 className="m-8 text-2xl">Detalle del carrito</h1>
      {cart.map( (item,i) => <li key={i}>{item.title} ${item.price}<button className="btn" onClick={()=>removeFromCart(item.id)}>Quitar</button></li> ) }
      {cart.length === 0?"":<button className="btn" onClick={()=>clear()}>Borrar todos</button>}
    </div>
  )
}
export default Cart