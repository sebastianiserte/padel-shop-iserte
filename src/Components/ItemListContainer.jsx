import { Children } from "react"

function ItemListContainer({children}) {
  return (
    <>
      <div className="w-10/12 mx-auto">
        <h1>Contenedor de los items</h1>
        {children}
      </div>
     
    </>
 
  )
}
export default ItemListContainer