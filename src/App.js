import './App.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';


function App() {
    
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting="Sebastian"/>
      {/* Prop itemid para cargar un item del archivo public/data/productos.json */}
      <ItemDetailContainer itemId="1"/>
    </div>
  );
}

export default App;
