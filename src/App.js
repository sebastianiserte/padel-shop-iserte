//import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ItemCount from './Components/ItemCount';
import ItemList from './Components/ItemList';

function App() {
  return (
    <div className="App">
      <NavBar/>

      <ItemListContainer>
        {/*<ItemCount stock={5} initial={1} onAdd={(ant)=>ant+1} onSubst={(ant)=>ant-1}/>*/}
       
      </ItemListContainer>




      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/}
    </div>
  );
}

export default App;
