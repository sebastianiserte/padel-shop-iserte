import Item from "./Item"

function ItemList({items}) {

    return (
    <div>
        <ul className="grid md:grid-cols-5  gap-4 items-center">
            { items.map( (d) => <Item prod={d} key={d.id}/> )}
        </ul>
    </div>
  )
}

export default ItemList