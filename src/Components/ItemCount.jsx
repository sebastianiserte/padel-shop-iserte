import { useState } from "react"

function ItemCount({stock, initial, onAdd}) {

    const btn = "btn w-12 text-3xl font-bold text-white  border-2 border-solid border-accent rounded-sm";
    const total = "flex self-center h-full";
    const [sum,setSum] = useState(initial);

    const sumar = () => {
      if (sum<stock) {setSum(sum+1)};
    }

     const restar = () => {
       if (sum>initial) {setSum(sum-1)};
    }

  return (
    <div >
        <h1 className="border-y-2 border-solid bg-slate-800 text-white">{stock} disponibles</h1> 
        <div className="flex justify-between self-center px-24">
            <button className={btn} onClick={restar}>-</button>
            <p className={total}>{sum}</p>
            <button className={btn} onClick={sumar} >+</button>
        </div>
        <div className="p-2">
        <button className="btn btn-outline w-full" onClick={()=>onAdd(sum,)} >AGREGAR AL CARRITO</button>
        </div>
    </div>

  )
}
export default ItemCount