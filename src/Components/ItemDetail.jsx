import ItemCount from "./ItemCount";

function ItemDetail({detail}) {

  const onAddFunction = (cantidad) => {

    alert("Has comprado " + cantidad);
  }

  return (
    <div className="max-w-[850px] mx-auto card-bordered border-accent rounded-xl p-4 shadow-xl m-8">
        <div className="flex flex-row relative">
            <div className="basis-2/5 flex justify-center">
              <img className="object-contain" src={detail.pictureUrl} alt="" />
            </div>
            <div className="flex flex-col p-2 basis-3/5">
              <h1 className="font-bold text-2xl mt-4 text-left">Item {detail.title}</h1> 
              <h2 className="font-bold text-4xl my-4 text-fuchsia-700 text-left">$ {detail.price}</h2>
              <p className="text-left my-8">{detail.detalle}</p>
              <ItemCount stock={detail.stock} initial={1} onAdd={onAddFunction}/>
            </div>
        </div>
    </div>
  )
}
export default ItemDetail