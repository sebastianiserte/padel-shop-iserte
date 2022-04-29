import cart from '../assets/2x/carrito@2x.png';

function CartWidget() {
  return (
     <div className='bg-slate-50 rounded-full p-2 mx-24 w-fit'>
        <img className="max-h-[30px] z-10 " src={cart} alt="carrito"  />
    </div>

  )
}
export default CartWidget