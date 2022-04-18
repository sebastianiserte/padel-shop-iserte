import logo from '../logo.svg';

const estilos={
    margin: 'auto', 
    fontFamily: 'Audiowide',
    fontVariant:'all-small-caps'
}


const NavBar = () => {
  return (
    <nav className="flex items-center justify-around min-h-[60px] bg-blue-700 ">
      <img className="max-h-[60px]" src={logo} alt="logo"  />
      <ul className="flex items-center justify-around min-h-[60px] text-white text-3xl" style={estilos}>
          <li className='list-none mx-8'>Inicio</li>
          <li className='list-none mx-8'>Palas</li>
          <li className='list-none mx-8'>Zapatillas</li>
          <li className='list-none mx-8'>Accesorios</li>
      </ul>
    </nav>
  )
}
export default NavBar