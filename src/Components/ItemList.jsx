import Item from "./Item"

function ItemList({items}) {
    
    
    return (
    <div>
        <h1>(ItemList) Todos los prodcutos</h1>
        <ul className="grid grid-cols-4  gap-4">
            {/* { items.map( (d) => <Item id={d.id} title={d.title} price={d.price} pictureUrl={d.pictureUrl} stock={d.stock}/> )} */}

            { items.map( (d) => <Item prod={d} key={d.id}/> )}

        </ul>
    </div>
    
  )
}

export default ItemList