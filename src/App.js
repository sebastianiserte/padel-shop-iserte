import './App.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Cart from './Components/Cart';
import CartProvider from './Context/CartContext';


function App() {
    
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>

          <NavBar/>
            <Routes>
              <Route path="/" element={<ItemListContainer greeting="Sebastian"/>} />
              <Route path="/category/:id" element={<ItemListContainer greeting="Sebastian"/>} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          <Footer/>  

        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
