import {  collection, getFirestore, addDoc  } from "firebase/firestore";
import { useContext, useRef, useState } from "react";
import { CartContext } from "../Context/CartContext";

function SendOrder() {

    const {cart,clear} = useContext(CartContext)
    const [id, setId] = useState("")

    const nameEl = useRef(null)
    const phoneEl = useRef(null)
    const emailEl = useRef(null)

    const inputStyle = "border-2 border-solid border-fuchsia-700 rounded-md h-10 mb-4"
    const h1Style = "text-4xl my-8";

    const setOrderId = (id) => {
            setId(id);
            clear();
        }

    const handleSubmit = (e)=>{

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

        console.log(order);
        const db = getFirestore();
        /***guarda la orden***/
        const ordersCollection = collection(db,"orders")
        const id = addDoc(ordersCollection,order)
            .then(({id}) => setOrderId(id))

        /**Actualizar stocks de items
        //Recupero los Documenstos.**/              
        // db.collection("items")
        //     .where(documentId(),"in",cart.map((c)=>c.id))
        //     .update({stock:cart.stock-cart.cantidad})
        
    }

  return (
    <div className="min-h-[72vh]">
        

        {(cart.length===0)?
            <>
            <h1 className={h1Style}>Tu pedido ha sido enviado con exito!</h1>
            <p>Este el código para hacer seguimiento de esta compra es: </p>
            <p className="text-2xl font-bold m-4 text-purple-700 bg-slate-200 p-4 w-fit mx-auto rounded-md">{id}</p>
            </>
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



        {/* {(cart.length===0)?<h1>{id}</h1>: */}
        {/* <button className="btn" onClick={()=>salvar()}>Salvar</button> }    */}
    </div>
    
  )
}
export default SendOrder