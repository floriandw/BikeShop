import { useContext } from "react";
import "./Cart.css";
import CartContext from "../context/cart/CartContext";
import formatCurrency from "format-currency";
import CartItem from "./CartItem"

const Cart = () => {
    const { showCart, cartItems, showHideCart } = useContext(CartContext);

    let options = {format: '%s%v', symbol: "€"}
    return (
        <>
            {showCart && (
                <div className="cart__wrapper">
                    <div style={{ textAlign: "right"}}>
                        <i style={{cursor: "pointer"}} className="fa fa-time-circle" aria-hidden="true" onClick={showHideCart}></i>
                    </div>
                    <div className="cart__innerWrapper">
                        {cartItems.length === 0 ? (<h4>Cart is Empty</h4>):
                        (<ul>
                            {cartItems.map(item => (
                                <CartItem key={item.id} />
                            ))}
                        </ul>)}
                    </div>
                    <div className="Cart__cartTotal">
                        <div>
                            Cart Total
                        </div>
                        <div></div>
                        <div style={{marginLeft: 5}}>
                            {formatCurrency(cartItems.reduce((amount, item) => item.price + amount, 0), options)}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Cart
