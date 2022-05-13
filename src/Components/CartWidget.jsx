import { useContext } from 'react';
import { Link } from 'react-router-dom';
import cartImg from '../assets/2x/carrito@2x.png';
import { CartContext } from '../Context/CartContext';

function CartWidget() {



  const {cart} = useContext(CartContext)

  const total = cart.reduce((acum,item)=>
      { console.log(cart)
        return acum+Number(item.cantidad)},0)

  return (
    <Link to="/cart">
     <div className='bg-slate-50 rounded-full p-2 mx-24 w-fit relative border-2 border-green-700 border-solid'>
        <img className="max-h-[30px] z-10 " src={cartImg} alt="carrito"  />
        {cart.length>0&&<div className='bg-red-300 rounded-full absolute w-6 h-6 right-[-8px] bottom-[-8px]'>{total}</div>}
        
      </div>
    </Link>  

  )
}
export default CartWidget