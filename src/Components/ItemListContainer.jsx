import { useEffect, useState } from "react";
import ItemList from "./ItemList";


function ItemListContainer({greeting}) {



  const BackEndData = fetch("./data/productos.json", {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(response=> response.json())
        .then(prod=>prod);

  const [data, setData] = useState([]);

  useEffect(()=>{
  const promise = new Promise((res,rej)=>{
    setTimeout(()=>res(BackEndData),2000);
  });
  promise.then(res=>{
    setData(res);
  });
  },[]);



  return (
    <>
      <div className="w-10/12 mx-auto">
        <h1 className="text-4xl my-8" >Hola {greeting}</h1>
        <ItemList items={data}/>
      </div>
     
    </>
 
  )
}
export default ItemListContainer