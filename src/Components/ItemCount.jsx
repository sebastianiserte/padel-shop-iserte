import { useState } from "react"

function ItemCount({stock, initial, onAdd,onSubst}) {

    const btn = "bg-cyan-700 w-1/4 h-full text-3xl font-bold text-white flex align-top justify-center";
    const total = "flex self-center h-full";
    const [sum,setSum] = useState(initial);

    const sumar = () => {
      if (sum<stock) {setSum(onAdd(sum))};
    }

    const restar = () => {
      if (sum>1) {setSum(onSubst(sum))};
    }

  return (
    <div className="border-2 border-solid">
        <h1>{stock} disponibles</h1> 
        <div className="flex justify-between self-center border-2 border-solid border-cyan-600">
            <button className={btn} onClick={restar}>-</button>
            <p className={total}>{sum}</p>
            <button className={btn} onClick={sumar} >+</button>
        </div>
    </div>

  )
}
export default ItemCount