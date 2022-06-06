import { addDoc, collection, doc, getFirestore, runTransaction  } from "firebase/firestore";
import { useContext, useRef, useState } from "react";
import { CartContext } from "../Context/CartContext";

function SendOrder() {

    const {cart,clear} = useContext(CartContext)
    const [id, setId] = useState("")
    const nameEl = useRef(null)
    const phoneEl = useRef(null)
    const emailEl = useRef(null)
    const inputStyle = "border-2 border-solid border-slate-300 bg-white rounded-md h-10 mb-4 hover:border-slate-400"
    const h1Style = "text-4xl my-8";

    const setOrderId = (id) => {
            setId(id);
            clear();
        }

    const handleSubmit = async (e)=>{

        e.preventDefault();

        const order = {
            buyer: {name:nameEl.current.value,
                    phone:phoneEl.current.value,
                    email:emailEl.current.value
                },
            items: cart.map(({title,price,cantidad})=>({title,price,cantidad})),
            total: cart.reduce((acum,item)=>acum+Number(item.price*item.cantidad),0),
            date: new Date().toString()
        }

        const db = getFirestore();
        /***guarda la orden***/
        const ordersCollection = collection(db,"orders")
        const id = addDoc(ordersCollection,order)
            .then(({id}) => setOrderId(id))

        /**Actualizar stocks de items.**/              
        cart.forEach(async (item)=>{

            const sfDocRef = doc(db,"items",item.id)

            try {
                await runTransaction(db, async (transaction) => {
                  const sfDoc = await transaction.get(sfDocRef);
                  if (!sfDoc.exists()) {
                    throw "Document does not exist!";
                  }
              
                  var nuevoStock = Number(item.stock-item.cantidad);
                  transaction.update(sfDocRef, { stock: nuevoStock });
                });
              } catch (e) {
                console.log("Transaction failed: ", e);
              }
        })
    }

  return (
    <div className="min-h-[68vh]">
      
        {(cart.length===0)?
            <div className="max-w-[850px] mx-auto card-bordered  rounded-xl p-4 shadow-md bg-white m-8">
            <h1 className={h1Style}>Tu pedido ha sido enviado con exito!</h1>
            <p>Este código es para hacer seguimiento de tu compra: </p>
            <p className="text-2xl font-bold m-4 text-purple-700 bg-slate-200 p-4 w-fit mx-auto rounded-md">{id}</p>
            </div>
            :
            <>
            <h1 className={h1Style}>Enviar pedido</h1>
            <form className="flex flex-col w-1/4 mx-auto text-left" onSubmit={handleSubmit}>
                <label htmlFor="name">Nombre</label>
                <input className={inputStyle} type="text" id="name" ref={nameEl}/>
                <label htmlFor="phone">Teléfono</label>
                <input className={inputStyle}  type="text" id="phone" ref={phoneEl}/>
                <label htmlFor="email">E-Mail</label>
                <input className={inputStyle}  type="email" id="email"ref={emailEl} />
                <input className="btn w-3/4 mx-auto" type="submit" value="Enviar" />
            </form>
            </>
        }
    </div>
    
  )
}
export default SendOrder