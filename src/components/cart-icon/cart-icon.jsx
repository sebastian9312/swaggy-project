import "./cart-icon.styles.jsx";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";
import { CartIconContainer, ItemCount } from "./cart-icon.styles.jsx";

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

    const toggleCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <CartIconContainer onClick={toggleCartOpen}>
            <ShoppingIcon />
            <ItemCount> {cartCount} </ItemCount>
        </CartIconContainer>
    );
};

export default CartIcon;