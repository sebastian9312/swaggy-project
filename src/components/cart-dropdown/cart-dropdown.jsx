import "./cart-dropdown.styles.jsx";
import Button from "../button/button";
import CartItem from "../cart-item/cart-item";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { useNavigate } from "react-router-dom";
import { CartDropdownContainer, CartItems } from "./cart-dropdown.styles.jsx";

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);

    const navigate = useNavigate();
    const goToCheckoutHandler = () => navigate("/checkout");

    return (
        <CartDropdownContainer>
            <CartItems>
                {cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)}
            </CartItems>
            <Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
        </CartDropdownContainer>
    );
};

export default CartDropdown;