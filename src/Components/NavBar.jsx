import { NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';

const menuStyle={
    margin: 'auto', 
    fontWeight: 400,
}

const fontLogo1={
  fontWeight: 800,
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
    <div className='flex items-end shadow-xl bg-blue-800 border-white  border-b-8 min-h-[80px]'>
      <div className='md:w-1/6 text-center tracking-tight  font-medium text-3xl  text-white'>
        <NavLink  to={menu.find(el=>el.name=="Inicio").ruta}>
          <div className='relative flex justify-center'>
            <div className='w-[155px]' style={fontLogo1}><div className='flex'>PADEL</div><div className='flex justify-end items-end h-[60px]'>SHOP</div></div>
            <div className='border-4 px-2 bg-white top-8  bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 absolute italic  font-bold text-2xl'>Medellin</div>
          </div>
        </NavLink>
        </div>
      <nav className="w-full flex  items-center justify-around  ">
        <ul className="items-end justify-around min-h-[60px] text-white text-2xl hidden  md:flex" style={menuStyle}>
            {menu.map((m,i)=><li className='list-none mx-8'  key={i}><NavLink  to={m.ruta}  className={({ isActive }) => (isActive ? 'text-white' : 'text-slate-400')}>{m.name}</NavLink></li>)}
        </ul>
      </nav>
      <div className='md:w-1/6 flex justify-end '>
        <CartWidget />
        </div>
    </div>
    
  )
}
export default NavBar