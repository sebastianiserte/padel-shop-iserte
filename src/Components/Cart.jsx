import { useContext } from "react"
import { CartContext } from "../Context/CartContext"
import ButtonToPage from "./ButtonToPage";

function Cart() {

  const {cart, removeFromCart,clear} = useContext(CartContext)

  const total = cart.reduce((acum,item)=>acum+Number(item.price*item.cantidad),0)

  return (
    <div className="max-w-[850px] mx-auto card-bordered border-accent rounded-xl p-4 shadow-xl m-8">
      
      <h1 className="m-8 text-2xl">Detalle de la compra</h1>

      <div>
      {cart.map( (item,i) => 
          <li className="list-none flex bg-slate-100 justify-around p-2 items-center my-2" key={i}>
              <img className="w-28 bg-transparent" src={item.image} alt=""></img>
              <p>{item.title} </p>
              <p>{item.cantidad} </p>
              <p>$ {item.price*item.cantidad}</p>
              <button className="btn" onClick={()=>removeFromCart(item.id)}>Quitar</button>
          </li> 
      )}
      </div>

        {cart.length === 0?
          (
          <div className="w-1/4 mx-auto">
            <p>No hay items en el carrito</p>
            <ButtonToPage path="/" text="Ir al Inicio"></ButtonToPage>
            </div>
          )
          : (<div className="w-full text-right">
                <div className="flex items-center justify-end">
                  <h2 className="text-2xl font-bold my-8">Total: $ {total}</h2>
                  <ButtonToPage path="/pay" text="Pagar"></ButtonToPage>
                </div>
                <ButtonToPage path="/" text="seguir comprando"></ButtonToPage>
            <button className="btn " onClick={()=>clear()}>Borrar todos</button>
          </div>)}

    </div>
  )
}
export default Cart