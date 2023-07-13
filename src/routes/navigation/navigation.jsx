import { Link, Outlet } from "react-router-dom";
import { ReactComponent as SwaggyLogo } from "../../assets/swaggy.svg";

import "./navigation.styles.scss";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";

import { signOutUser } from "../../utils/firebase/firebase";
import CartIcon from "../../components/cart-icon/cart-icon";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown";
import { CartContext } from "../../contexts/cart.context";

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen, setIsCartOpen } = useContext(CartContext);

    // const signOutHandler = async () => {
    //     const response = await signOutUser();
    //     setCurrentUser(null);
    // };

    return (
        <>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <SwaggyLogo className="logo" />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">
                        SHOP
                    </Link>
                    {
                        currentUser
                            ? <span onClick={signOutUser} className="nav-link">Sign Out</span>
                            : <Link className="nav-link" to="/auth">SIGN IN</Link>
                    }
                    <CartIcon />
                </div>
                {isCartOpen && <CartDropdown />}
            </div>
            <Outlet />
        </>
    );
};

export default Navigation;