import { useContext } from "react"
import { CartContext } from "../Context/CartContext"
import ButtonToPage from "./ButtonToPage";

function Cart() {

  const {cart, removeFromCart,clear} = useContext(CartContext)
  const total = cart.reduce((acum,item)=>acum+Number(item.price*item.cantidad),0)

  return (
    <div className="min-h-[68vh]">
      <div className="max-w-[850px] mx-auto card-bordered bg-white rounded-xl  shadow-md p-4 m-8">
        <h1 className="m-8 text-2xl">Detalle de la compra</h1>
        <div>
        {cart.map( (item,i) => 
          <li className="list-none flex bg-slate-100 justify-between py-2 px-16 items-center my-2" key={i}>
            <div className="flex items-center">
              <p>{item.cantidad} </p>
              <img className="w-20 bg-transparent mx-4" src={item.image} alt=""></img>
            </div>
            <p>{item.title} </p>
            <p>$ {item.price*item.cantidad}</p>
            <button className="btn" onClick={()=>removeFromCart(item.id)}>Quitar</button>
          </li> 
        )}
        </div>

        {cart.length === 0?
          (<div className="w-1/4 mx-auto">
            <p>No hay items en el carrito</p>
            <ButtonToPage path="/" text="Ir al Inicio"></ButtonToPage>
          </div>)
        : 
          (<div className="w-full text-right">
            <button className="btn mx-2" onClick={()=>clear()}>Quitar todos</button>
            <h2 className="text-3xl font-bold border-b-2 mt-8 px-2">Total: $ {total}</h2>
            <div className="flex items-center justify-end">
              <ButtonToPage path="/" text="seguir comprando"></ButtonToPage>
              <ButtonToPage path="/pay" text="Pagar"></ButtonToPage>
            </div>
          </div>)
        }
      </div>
    </div>
  )
}
export default Cart