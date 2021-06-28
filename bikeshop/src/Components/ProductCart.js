import "./ProductCart.css"
import formatCurrency from "format-currency"
import Rating from "./Rating"

const ProductCart = ({ product }) => {
    let options = { format: "%s%v", symbol: "€"};
    return (
        <div className="productCard__wrapper">
            <div>
                <img className="productCard__img" src={product.image} alt="" />
                <h4>{product.name}</h4>
                <div className="ProductCard__price">
                    <h5>{formatCurrency(`${product.price}`, options)}</h5>
                </div>
                <div className="ProductCart__rating">
                    <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
                </div>
                <button className="ProductCard__button">Add to basket</button>
            </div>
        </div>
    )
}

export default ProductCart
