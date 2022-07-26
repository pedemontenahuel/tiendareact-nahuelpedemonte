import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';

import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Counter from './components/Counter/Counter';


function App() {

  const [show, setShow] = useState(true)
  const HandleOnAdd = (quantity) =>{
    console.log('cantidad de items agregados' ,quantity)
  }
  return (
    <>
       <Navbar/>
       <Counter show={show} stock={10} initial={1} onAdd={HandleOnAdd}/>  
       <ItemListContainer show={show} setShow={setShow} greeting= "Tienda de Belleza"/>
  
    </>

  );
}

export default App;
