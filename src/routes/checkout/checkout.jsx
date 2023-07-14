import { useContext } from "react";
import CheckoutItem from "../../components/checkout-item/checkout-item";
import { CartContext } from "../../contexts/cart.context";


const Checkout = () => {

    const { cartItems } = useContext(CartContext);

    return (
        <div>
            {
                cartItems.map(item => <CheckoutItem key={item.id} product={item} />)
            }
        </div>
    );
};

export default Checkout;