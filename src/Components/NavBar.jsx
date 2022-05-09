import { NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';

const estilos={
    margin: 'auto', 
    /*fontFamily: 'Audiowide',*/
    fontFamily: 'MuseoModerno',
    fontWeight: 700,
    fontVariant:'all-small-caps'
}

const menu = [
  {name :"Inicio", ruta:"/"},
  {name :"Palas", ruta:"/category/palas"},
  {name :"Zapatillas", ruta:"/category/zapatillas"},
  {name :"Accesorios", ruta:"/category/accesorios"},
];

const NavBar = () => {
  return (
    <div className='flex  items-center shadow-xl bg-slate-800'>
      <div className='flex-none text-right w-1/6 font-medium text-5xl italic text-sky-500'><NavLink  to={menu.find(el=>el.name=="Inicio").ruta}>Padel Shop</NavLink></div>
      <nav className="w-full flex items-center justify-around min-h-[80px] ">
        <ul className="flex items-end justify-around min-h-[60px] text-white text-3xl " style={estilos}>
            {menu.map((m,i)=><li className='list-none mx-8'  key={i}><NavLink  to={m.ruta}  className={({ isActive }) => (isActive ? 'text-white' : 'text-slate-400')}>{m.name}</NavLink></li>)}
        </ul>
      </nav>
      <div className='flex flex-none w-1/6'>
        <CartWidget />
        </div>
    </div>
    
  )
}
export default NavBar