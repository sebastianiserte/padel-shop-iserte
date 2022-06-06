import { Link } from "react-router-dom"

function ButtonToPage({path,text}) {
  
  return (
    <div className="p-2">
        <Link to={path}><button className="btn btn-outline">{text}</button></Link>
    </div>
  )
}
export default ButtonToPage