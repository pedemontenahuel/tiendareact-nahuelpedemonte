import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <>
    <Navbar/>
    <ItemListContainer greeting="Tienda de Belleza"/>
  
    </>

  );
}

export default App;
