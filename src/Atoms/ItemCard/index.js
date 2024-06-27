const ItemCard = ({price,image,category})=>{
    return(
        <div className="card">
            <img src={image} alt='item'/>
            <h2>{category}</h2>
            <h5>REF 17893030</h5>
            <h2>{price}</h2>

        </div>
    )
}
export default ItemCard;