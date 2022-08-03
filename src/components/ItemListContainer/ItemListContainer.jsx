import Styled from 'styled-components'
import { getProducts } from '../../AsynMock'
import { useState, useEffect } from 'react'
const ItemListContainer = (props) => {

    const [products, setProducts] = useState ([])
    const [loading, setLoading] = useState (true)

    useEffect( ()=> {
    getProducts().then(response => {
        setProducts(response)}).catch( error => {
            console.log(error)
        }).finally(()=>{
            setLoading(false)
        })
    } ,[])

    const productosTransformados = products.map(product => (
        <li key={product.id}> {product.nombre}</li>
    ))
    console.log(productosTransformados)

    if(loading){
        return <h1> Cargando productos...</h1>
    }
    return (
        <>
        <ItemList> <h2>{props.greeting}</h2></ItemList>
       <ul>
        {productosTransformados}
       </ul>
        
        </>
    )
  
}
export default ItemListContainer

const ItemList = Styled.div`
`