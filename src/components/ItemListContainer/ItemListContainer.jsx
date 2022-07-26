import Styled from 'styled-components'
const ItemListContainer = (props) => {


    return(
        <ItemList> <h2>{props.greeting}</h2></ItemList>
   )
    
}
export default ItemListContainer

const ItemList = Styled.div`
`