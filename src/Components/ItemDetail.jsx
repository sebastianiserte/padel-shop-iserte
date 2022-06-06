import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import ButtonToPage from "./ButtonToPage";
import ItemCount from "./ItemCount";

function ItemDetail({detail}) {

  const {addToCart} = useContext(CartContext)
  const [cantidad, setCantidad] = useState(0)

  const onAddFunction = (cant) => {
    setCantidad(cant);
    addToCart(detail,cant);
  }

  return (
    <div className="max-w-[850px] mx-auto card-bordered  rounded-xl p-4 shadow-md bg-white m-8">
        <div className="flex flex-row relative">
            <div className="basis-2/5 flex justify-center mr-8">
              <img className="object-contain" src={detail.image} alt="" />
            </div>
            <div className="flex flex-col p-2 basis-3/5">
              <h1 className="font-bold text-2xl mt-4 text-left">{detail.title}</h1> 
              <h2 className="font-bold text-4xl my-4 text-fuchsia-700 text-left">$ {detail.price}</h2>
              <p className="text-left my-8">{detail.detalle}</p>

              {cantidad===0?
                <ItemCount stock={detail.stock} initial={1} onAdd={onAddFunction} />
                : <>   
                  <p className={"text-left mx-2  p-2"+(!cantidad>0?" block":" hidden")}>{cantidad} items agregados al Carrito</p>
                  <ButtonToPage path="/cart" text="Terminar compra" ></ButtonToPage>
                  </>
                }
                <div className="flex justify-evenly">
                  <ButtonToPage path={"/category/"+detail.categoria} text={"ver mas "+detail.categoria} ></ButtonToPage>
                  <ButtonToPage path="/" text="Ver otros productos" ></ButtonToPage>
                </div>

            </div>
        </div>
    </div>
  )
}
export default ItemDetail