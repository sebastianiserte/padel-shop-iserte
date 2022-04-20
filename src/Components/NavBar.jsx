import logo from '../assets/SVG/logo.svg';
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
    <div className='flex relative'>
      <img className="max-h-[165px] z-10 " src={logo} alt="logo"  />
      <div className='absolute left-5 top-6 tblock h-[122px] w-[122px] rounded-full shadow-xl bg-white' ></div>
      <nav className=" absolute right-0 bottom-9 w-11/12 flex items-center justify-around min-h-[60px] bg-slate-900 shadow-xl">
        <ul className="flex items-center justify-around min-h-[60px] text-white text-4xl " style={estilos}>
            <li className='list-none mx-8'><a href='#'>Inicio</a></li>
            <li className='list-none mx-8'><a href='#'>Palas</a></li>
            <li className='list-none mx-8'><a href='#'>Zapatillas</a></li>
            <li className='list-none mx-8'><a href='#'>Accesorios</a></li>
        </ul>
        <CartWidget />
      </nav>
    </div>
    
  )
}
export default NavBar