import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail"

function ItemDetailContainer({itemId}) {
  
  //Recupero datos de un archivo
  const BackEndData = fetch("./data/productos.json", {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(response=> response.json())
    .then(prod=>prod);

  const [data, setData] = useState({});

  //Hook effect on mount con delay
  useEffect(()=>{
    
    const getItem = new Promise((res,rej)=>{
      setTimeout(()=>res(BackEndData),2000);
    });
    
    getItem.then(res=>{
      setData(res.find((i) => {i.id === itemId}));
    });
    
  },[]);
  
  
  return (
    <>
    {/* pregutno por el id para saber que si tengo los datos para renderizar, sino no renderizo nada (no supe que era mejor si ""/null/undefined)*/}
    {data.id ? <ItemDetail detail={data}/>:undefined}
    </>

  )
}
export default ItemDetailContainer