import { Link } from 'react-router-dom';
import cart from '../assets/2x/carrito@2x.png';

function CartWidget() {
  return (
    <Link to="/cart">
     <div className='bg-slate-50 rounded-full p-2 mx-24 w-fit'>
        <img className="max-h-[30px] z-10 " src={cart} alt="carrito"  />
    </div>
    </Link>  

  )
}
export default CartWidget