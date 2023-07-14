import "./cart-dropdown.styles.scss";
import Button from "../button/button";
import CartItem from "../cart-item/cart-item";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);

    const navigate = useNavigate();

    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)}
            </div>
            <Button onClick={() => navigate("/checkout")}>CHECKOUT</Button>
        </div>
    );
};

export default CartDropdown;