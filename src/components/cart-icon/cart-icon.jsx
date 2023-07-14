import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

    const toggleCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <div onClick={toggleCartOpen} className="cart-icon-container">
            <ShoppingIcon className="shopping-icon " />
            <span className="item-count"> {cartCount} </span>
        </div>
    );
};

export default CartIcon;