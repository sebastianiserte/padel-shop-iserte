import CartWidget from './CartWidget';

const estilos={
    margin: 'auto', 
    /*fontFamily: 'Audiowide',*/
    fontFamily: 'MuseoModerno',
    fontWeight: 700,
    fontVariant:'all-small-caps'
}


const NavBar = () => {
  return (
    <div className='flex  items-center shadow-xl bg-slate-800'>
      <div className='flex-none text-right w-1/6 font-medium text-5xl italic text-sky-500'>Padel Shop</div>
      {/* <img className="max-h-[165px] z-10 " src={logo} alt="logo"  /> */}
      {/* <div className='absolute left-5 top-6 tblock h-[122px] w-[122px] rounded-full shadow-xl bg-white' ></div> */}
      <nav className="w-full flex items-center justify-around min-h-[80px] ">
        <ul className="flex items-end justify-around min-h-[60px] text-white text-3xl " style={estilos}>
            <li className='list-none mx-8'><a href='#'>Inicio</a></li>
            <li className='list-none mx-8'><a href='#'>Palas</a></li>
            <li className='list-none mx-8'><a href='#'>Zapatillas</a></li>
            <li className='list-none mx-8'><a href='#'>Accesorios</a></li>
        </ul>
      </nav>
      <div className='flex flex-none w-1/6'>
        <CartWidget />
        </div>
    </div>
    
  )
}
export default NavBar