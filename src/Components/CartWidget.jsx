import { useContext } from 'react';
import { Link } from 'react-router-dom';
import cartImg from '../assets/bag.png';
import { CartContext } from '../Context/CartContext';

function CartWidget() {

  const {cart} = useContext(CartContext)
  const total = cart.reduce((acum,item)=> acum+Number(item.cantidad),0)

  return (
    <Link to="/cart">
     <div className='mr-2 md:mr-12 mb-2 p-2 w-14 md:w-fit relative border-4 border-white border-solid group hover:bg-slate-400'>
        <img className="max-h-[30px] z-10 " src={cartImg} alt="carrito"  />
        {cart.length>0&&<div className='bg-lime-400 border-white border-4 flex  items-center justify-center rounded-full font-bold absolute w-8 h-8 right-[-10px] bottom-[-10px] group-hover:bg-lime-500'>{total}</div>}
      </div>
    </Link>  

  )
}
export default CartWidget