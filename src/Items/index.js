import {useGetItems} from "./hooks/useGetItems";
import ItemCard from "../Atoms/ItemCard";
import './index.css'

const Items =()=>{
    const{items,error,loading}= useGetItems();
    console.log({items});
    return(
        <div className="items">
            {loading && <h2>Loading products...</h2>}
            {error && <h2>{error}</h2>}
            {items.length > 0 ? items.map((item)=>(
                <ItemCard
                key={item.id}
                image={item.image}
                category={item.category}
                price={item.price}
                

                />

            ) ): !loading && <h2>No item found</h2>
}
        </div>
    );
};
export default Items;