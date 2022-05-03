import Item from "./Item"

function ItemList({items}) {

    return (
    <div>
        <ul className="grid grid-cols-4  gap-4">
            { items.map( (d) => <Item prod={d} key={d.id}/> )}
        </ul>
    </div>
  )
}

export default ItemList