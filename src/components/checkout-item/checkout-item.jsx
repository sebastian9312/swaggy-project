import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";


const CheckoutItem = ({ product }) => {
    const { name, imageUrl, quantity, price } = product;

    const { removeItemFromCart } = useContext(CartContext);

    const removeItem = () => removeItemFromCart(product);

    return (
        <div>
            <img src={imageUrl} />
            <span>{name}</span>
            <div className="quantity">
                <button>-</button>
                <span>{quantity}</span>
                <button>+</button>
            </div>
            <span>{price}</span>
            <span onClick={removeItem}> REMOVE</span>
        </div>
    );
};

export default CheckoutItem;