import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GridLoader } from "react-spinners";
import ItemList from "./ItemList";
import {collection, getDocs,getFirestore} from "firebase/firestore"


function ItemListContainer({greeting}) {

  /** variables */
  const {id} = useParams();
  const [data, setData] = useState([]);

  useEffect(()=>{
    /**recupero datos desde un archivo json*/
    // let ruta="data/productos.json";
    // id===undefined?ruta= ("./").concat(ruta):ruta= ("../../").concat(ruta);
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

    // Promise con Async para emular delay con serivicos
    // const promise = new Promise((res,rej)=>{
    //     setTimeout(()=>res(BackEndData),500);
    // });

    // //Resuelvo el Promise con estados nuevos
    // promise.then(res=>{
    //   setData(res);
    //   setLoading(false);
    // });

    /** Datos desde el servicio firestore */
    setData([]);
    const db = getFirestore();
    const itemColection = collection(db,"items")
    getDocs(itemColection).then((snapshot)=>{
        
        //Si la categoria del producto es undefined:
        //1. estoy en el inicio, entoces traigo todos los elementos diferentes de undefined
        //2. sino estoy en una categoria y filtro po la categoria.
        setData(snapshot.docs
          .map((doc)=>({id: doc.id, ...doc.data()}))
          .filter((item)=>{
            return id!==undefined?item.categoria===id:item.categoria!==id
          })
        )
    })
  },[id]);
  
  return (
      <div className="w-10/12 mx-auto min-h-[68vh]">
        <h1 className="text-4xl my-8" >{greeting}</h1>
        {data.length===0?
          <GridLoader color={'#394e6a'} loading={true} size={15} css="display:flex;flex-wrap: wrap;position:fixed;top:50%;left: 48.3%;"/>
          :<ItemList items={data}/>}
      </div>
  )
}
export default ItemListContainer