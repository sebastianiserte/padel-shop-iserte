import { Link } from "react-router-dom"

function ButtonToPage({path,text,visible}) {
  
  return (
    //Opc2 quitar el +(visible?" block":" hidden")
    <div className={"p-2"+(visible?" block":" hidden")}>
        <Link to={path}><button className="btn btn-outline w-full ">{text}</button></Link>
    </div>
  )
}
export default ButtonToPage