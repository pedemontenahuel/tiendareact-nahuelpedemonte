import { useState , useEffect } from "react";

const Counter = ({ show, stock, initial , onAdd}) => {
    const [count, setCount] = useState (0)
 
   useEffect(()=> {
     console.log ('function callback useeffect')

     return () => console.log ('el componente va a desmontarse')
   },[show])

   const decrement = () =>{
    if ( count > initial){
         setCount(count - 1 )
    }
   }

   const increment = () =>{
    if ( count < stock){
        setCount(count+1)
    }
   }

   console.log ('va a renderizar')
   
   
  return (
    <div> 
    <button onClick={decrement}> - </button>
    <p>{count}</p>
    <button onClick={increment}> +</button>
    <button onClick={()=> onAdd (count)}> Carrito</button>
    </div>
  )
}
export default Counter