import { useState } from "react";
import ButtonToPage from "./ButtonToPage";
import ItemCount from "./ItemCount";


//const emptyComponent = () => ("");

function ItemDetail({detail}) {

  const [visible, setVisible] = useState(true)
  const [cantidad, setCantidad] = useState(0)

  const onAddFunction = (cant) => {
    alert("Has comprado " + cant);
    //opcion 1(utilizada): utilizar el estado para indicar por props la visivilidad del componente
    //opcion 2: utilizar el estado en una condicion que indique cual componente utilizar.
    setVisible(false);
    setCantidad(cant)
  }

  return (
    <div className="max-w-[850px] mx-auto card-bordered border-accent rounded-xl p-4 shadow-xl m-8">
        <div className="flex flex-row relative">
            <div className="basis-2/5 flex justify-center">
              <img className="object-contain" src={detail.pictureUrl} alt="" />
            </div>
            <div className="flex flex-col p-2 basis-3/5">
              <h1 className="font-bold text-2xl mt-4 text-left">Item {detail.title}</h1> 
              <h2 className="font-bold text-4xl my-4 text-fuchsia-700 text-left">$ {detail.price}</h2>
              <p className="text-left my-8">{detail.detalle}</p>

              {/* //opc1 */}
              <ItemCount stock={detail.stock} initial={1} onAdd={onAddFunction} visible={visible}/>
              <p className={"text-left mx-2 bg-slate-300 p-2"+(!visible?" block":" hidden")}>{cantidad} items agregados al Carrito</p>
              <ButtonToPage path="/cart" text="Terminar compra" visible={(!visible)}></ButtonToPage>


              {/* //opc2 
              quitar de los componentes itemCount y ButtonToPage la logica que evalua la prop visible.
              {visible?<ItemCount stock={detail.stock} initial={1} onAdd={onAddFunction} />:<ButtonToPage path="/cart" text="Terminar compra" ></ButtonToPage>}
              */}
              
             
            </div>
        </div>
    </div>
  )
}
export default ItemDetail