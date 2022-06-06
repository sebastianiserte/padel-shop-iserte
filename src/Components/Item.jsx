import { Link } from "react-router-dom";

function Item({prod}) {

  return (
    <li className="list-none  basis-1/4 bg-white rounded-xl shadow-md group hover:scale-105 hover:shadow-lg" key={prod.id}>
      
      <Link to={`/item/${prod.id}`}>
        <div className="relative flex flex-col">
             
            <img className="m-auto rounded-t-xl p-2 h-[220px]" src={prod.image} alt="" />
            <div className="flex justify-between p-4 bg-slate-100 rounded-b-xl"> 
              <h2 className="font-normal text-l ">Item {prod.title}</h2>
              <h3 className="font-semibold text-l  text-fuchsia-700">{prod.stock<1?'Agotado': '$ '+prod.price}</h3>
            </div>
            <div className="absolute top-0 left-0 w-full h-full opacity-70 group-hover:bg-slate-300 rounded-xl"></div>
            <div className="absolute top-0 left-0 w-full h-full flex bg-transparent invisible group-hover:visible rounded-xl justify-center items-center">
              <button className="btn btn-ghost bg-[#394e6a]/20 text-slate-800">DETALLE</button>
            </div>
        </div>
        </Link>
    </li>
  )
}
export default Item