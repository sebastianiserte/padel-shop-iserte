import { Link } from "react-router-dom";

function Item({prod}) {

  return (
    <li className="list-none  basis-1/4 " key={prod.id}>
        <div className="shadow-xl card-bordered border-accent rounded-xl">
            <h1 className="font-bold text-xl mt-4">Item {prod.title}</h1> 
            <img className="h-[230px] m-auto" src={prod.pictureUrl} alt="" />
            <h2 className="font-bold text-2xl my-4 text-fuchsia-700">$ {prod.price}</h2>
            <h1 className="border-y-2 border-solid bg-slate-800 text-white">{prod.stock} disponibles</h1> 
            <div className="p-2">
            <Link to={`/item/${prod.id}`}><button className="btn btn-outline w-full ">DETALLE</button></Link>
            </div>
        </div>

    </li>
  )
}
export default Item