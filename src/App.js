import './App.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';


function App() {
    
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Sebastian"/>} />
          <Route path="/category/:id" element={<ItemListContainer greeting="Sebastian"/>} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
        <Footer/>        
      </BrowserRouter>
    </div>
  );
}

export default App;
