import ItemCount from "./ItemCount"

function Item({prod}) {

  const onAddFunction = (cantidad) => {

    alert("Has comprado " + cantidad);
  }

  return (
    <li className="list-none  basis-1/4 " key={prod.id}>
        <div className="shadow-xl card-bordered border-accent rounded-xl">
            <h1 className="font-bold text-xl mt-4">Item {prod.title}</h1> 
            <img className="h-[230px] m-auto" src={prod.pictureUrl} alt="" />
            <h2 className="font-bold text-2xl my-4 text-fuchsia-700">$ {prod.price}</h2>
            <ItemCount stock={prod.stock} initial={1} onAdd={onAddFunction}/>
        </div>

    </li>
  )
}
export default Item