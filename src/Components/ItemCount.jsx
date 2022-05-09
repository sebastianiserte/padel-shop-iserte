import {useState } from "react"


function ItemCount({stock, initial, onAdd, visible}) {

    const btn = "btn btn-sm	btn-square text-xl items-start";
    const total = "flex self-center border-2 border-solid mx-2 px-2";
    const [sum,setSum] = useState(initial);


    const sumar = () => {
      if (sum<stock) {setSum(sum+1)};
    }

     const restar = () => {
       if (sum>initial) {setSum(sum-1)};
    }

  return (
    //Opc2 quitar el className
    <div className={visible?"block":"hidden"}>
        <h1 className="border-y-2 border-solid bg-slate-800 text-white">{stock} disponibles</h1> 
        <div className="flex justify-center items-center mt-2">
            <button className={btn} onClick={restar}>-</button>
            <p className={total}>{sum}</p>
            <button className={btn} onClick={sumar} >+</button>
        </div>
        <div className="p-2">
        <button className="btn btn-outline w-full" onClick={()=>onAdd(sum)} >AGREGAR AL CARRITO</button>
        </div>
    </div>

  )
}
export default ItemCount