import { useEffect, useState } from "react";
import ItemList from "./ItemList";

function ItemListContainer({greeting}) {

  const BackEndData = [
  { id:"0", title:"Producto1", description:"D3scripcion1", price:"100", pictureUrl:"https://upload.wikimedia.org/wikipedia/commons/e/e3/Siux_grafeno.jpg",stock:"5" },
  { id:"1", title:"Producto2", description:"Descripcion2", price:"100", pictureUrl:"https://upload.wikimedia.org/wikipedia/commons/e/e3/Siux_grafeno.jpg",stock:"4" },
  { id:"2", title:"Producto3", description:"D3scripcion3", price:"150", pictureUrl:"https://upload.wikimedia.org/wikipedia/commons/e/e3/Siux_grafeno.jpg",stock:"2" },
  { id:"3", title:"Producto4", description:"D3scripcion4", price:"200", pictureUrl:"https://upload.wikimedia.org/wikipedia/commons/e/e3/Siux_grafeno.jpg",stock:"1" },
  { id:"4", title:"Producto5", description:"D3scripcion5", price:"120", pictureUrl:"https://upload.wikimedia.org/wikipedia/commons/e/e3/Siux_grafeno.jpg",stock:"2" },
  { id:"5", title:"Producto6", description:"D3scripcion6", price:"100", pictureUrl:"https://upload.wikimedia.org/wikipedia/commons/e/e3/Siux_grafeno.jpg",stock:"10" },
  { id:"6", title:"Producto7", description:"D3scripcion7", price:"300", pictureUrl:"https://upload.wikimedia.org/wikipedia/commons/e/e3/Siux_grafeno.jpg",stock:"1" },
  { id:"7", title:"Producto8", description:"D3scripcion8", price:"140", pictureUrl:"https://upload.wikimedia.org/wikipedia/commons/e/e3/Siux_grafeno.jpg",stock:"3" },
  { id:"8", title:"Producto9", description:"D3scripcion9", price:"120", pictureUrl:"https://upload.wikimedia.org/wikipedia/commons/e/e3/Siux_grafeno.jpg",stock:"6" },
  ];


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