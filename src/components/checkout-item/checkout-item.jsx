import "./checkout-item.styles.scss";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";


const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, quantity, price } = cartItem;

    const { deleteItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext);

    const deleteItem = () => deleteItemFromCart(cartItem);

    return (
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">{quantity}</span>
            <span className="price">{price}</span>
            <div className="remove-button">&#10005;</div>
        </div>
    );
};

export default CheckoutItem;