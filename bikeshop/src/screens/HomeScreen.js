import products from "../data"
import "./HomeScreen.css"
import ProductCart from "../Components/ProductCart"

const HomeScreen = () => {
    return (
        <div className="products__wrapper">
            {products.map((product) => (
                (<ProductCart key={product.id} product={product}/>
                    )
            ))}
        </div>
    )
}

export default HomeScreen

