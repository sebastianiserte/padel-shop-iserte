import ItemCount from "./ItemCount"

function Item({id, title, price, pictureUrl,stock}) {

  return (
    <li className="list-none  basis-1/4 p-4" key={id}>
        <div className="shadow-xl border-2 border-solid">
            <h1 className="font-bold text-xl mt-4">Item {title}</h1> 
            <img className="h-[230px] m-auto" src={pictureUrl} alt="" />
            <h2 className="font-bold text-2xl my-4 text-fuchsia-700">$ {price}</h2>
            <ItemCount stock={stock} initial={1} onAdd={(ant)=>ant+1} onSubst={(ant)=>ant-1}/>
        </div>

    </li>
  )
}
export default Item