import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail"
import { GridLoader } from "react-spinners";
import { doc,getDoc,getFirestore} from "firebase/firestore"

function ItemDetailContainer() {
  
  /** variables y states*/
  const {id} = useParams();
  const [data, setData] = useState({});

  //Hook effect on mount con delay
  useEffect(()=>{
    
    setData([]);

    //Recupero datos del archivo json
    // const BackEndData = fetch("../../data/productos.json", {
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   }
    // })
    // .then(response=> response.json())
    // .then(prod=>prod.find((i) => i.id === id));

    // //Declaro el Promise con Async 2s
    // const getItem = new Promise((res,rej)=>{
    //   setTimeout(()=>res(BackEndData),500);
    // });
    
    //Resuelvo el Promise con estados nuevos
    // getItem.then(res=>{
    //   setData(res);
    //   setLoading(false);
    // });

    const db = getFirestore()
    const itemRef = doc(db,"items",id)
    getDoc(itemRef).then((snapshot)=>{
      if(snapshot.exists()){
        setData({id:snapshot.id, ...snapshot.data() });
      }
    })
  },[id]);
  
  return (

     <div className="w-10/12 mx-auto min-h-[68vh]">
      {/* pregutno por el id para saber que si tengo los datos para renderizar}*/}
      {data.id ? <ItemDetail detail={data}/>:<GridLoader color={'#394e6a'} loading={true} size={15} css="display:flex;flex-wrap: wrap;position:fixed;top:50%;left: 48.3%;"/>}
      
    </div>

  )
}
export default ItemDetailContainer

