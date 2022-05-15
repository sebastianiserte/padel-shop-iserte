import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GridLoader } from "react-spinners";
import ItemList from "./ItemList";
import {collection, getDocs,getFirestore} from "firebase/firestore"


function ItemListContainer({greeting}) {

  /** variables */
  const {id} = useParams();
  const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(()=>{
    /**recupero el archivo con los datos de produtos 
     * esta raro que despes de usar el Router me tome como que este archivo esté en otra ruta
     * por ejemplo para el home "/" -> ./data/productos.json ok
     *    categorias "/category/id" -> /category/id/data/productos.json no ok :S
    */
    // let ruta="data/productos.json";
    // id===undefined?ruta= ("./").concat(ruta):ruta= ("../../").concat(ruta);

    //Cambio los estador para solo mostrar el loader
    // setLoading(true);
    //setData([]);

    //Recupero datos del archivo json
    // const BackEndData = fetch(ruta, {
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   }
    // })
    //   .then(response=> response.json())
    //   .then(prod=>{
    //     if (id===undefined){
    //       return prod;
    //     } else {
    //       return prod.filter((p)=>p.categoria === id);
    //     }
    //   });

    // //Promise con Async
    // const promise = new Promise((res,rej)=>{
    //     setTimeout(()=>res(BackEndData),500);
    // });

    // //Resuelvo el Promise con estados nuevos
    // promise.then(res=>{
    //   setData(res);
    //   setLoading(false);
    // });

    setData([]);
    const db = getFirestore();
    const itemColection = collection(db,"items")
    getDocs(itemColection).then((snapshot)=>{
        
        // setLoading(false);
        setData(snapshot.docs.map((doc)=>({
          id: doc.id, ...doc.data()
        })))
        
    })

  },[id]);
  
  return (
      <div className="w-10/12 mx-auto min-h-[72vh]">
        <h1 className="text-4xl my-8" >Hola {greeting}</h1>
        {data.length===0?
          <GridLoader color={'#394e6a'} loading={true} size={15} css="display:flex;flex-wrap: wrap;position:fixed;top:50%;left: 48.3%;"/>
          :<ItemList items={data}/>}
      </div>
  )
}
export default ItemListContainer