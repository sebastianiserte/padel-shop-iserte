import Item from "./Item"

function ItemList({items}) {
    
    console.log(items)

    return (
    <div>
        <h1>ItemList</h1>
        <ul className="flex flex-row flex-wrap j">
            { items.map( (d) => <Item id={d.id} title={d.title} price={d.price} pictureUrl={d.pictureUrl} stock={d.stock}/> )}
        </ul>
    </div>
    
  )
}

export default ItemList