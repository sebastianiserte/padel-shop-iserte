import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail"
import { GridLoader } from "react-spinners";

function ItemDetailContainer() {
  
  /** variables y states*/
  const {id} = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  //Hook effect on mount con delay
  useEffect(()=>{
    
    //Cambio los estador para solo mostrar el loader
    setLoading(true);
    setData([]);

    //Recupero datos del archivo json
    const BackEndData = fetch("../../data/productos.json", {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(response=> response.json())
    .then(prod=>prod.find((i) => i.id === id));

    //Declaro el Promise con Async 2s
    const getItem = new Promise((res,rej)=>{
      setTimeout(()=>res(BackEndData),2000);
    });
    
    //Resuelvo el Promise con estados nuevos
    getItem.then(res=>{
      setData(res);
      setLoading(false);
    });
      
  },[id]);
  
  
  return (

     <div className="w-10/12 mx-auto min-h-[72vh]">
      {/* pregutno por el id para saber que si tengo los datos para renderizar, sino no renderizo nada (no supe que era mejor si ""/null/undefined)*/}
      {data.id ? <ItemDetail detail={data}/>:undefined}
      <GridLoader color={'#394e6a'} loading={loading} size={15} css="display:flex;flex-wrap: wrap;position:fixed;top:50%;left: 48.3%;"/>
    </div>

  )
}
export default ItemDetailContainer