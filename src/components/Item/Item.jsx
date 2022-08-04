const Item = ({product}) => {
    return (
        <li key={product.id}> {product.nombre} </li>
    )
}
export default Item