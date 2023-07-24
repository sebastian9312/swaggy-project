import { Link, Outlet } from "react-router-dom";
// import { ReactComponent as SwaggyLogo } from "../../assets/dog-logo.svg";
import { ReactComponent as SwaggyLogo } from "../../assets/swaggy.svg";

import { LogoContainer, NavLink, NavLinks, NavigationContainer } from "./navigation.styles.jsx";

import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";

import { signOutUser } from "../../utils/firebase/firebase";
import CartIcon from "../../components/cart-icon/cart-icon";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown";
import { CartContext } from "../../contexts/cart.context";

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

    // const signOutHandler = async () => {
    //     const response = await signOutUser();
    //     setCurrentUser(null);
    // };

    return (
        <>
            <NavigationContainer>
                <LogoContainer to="/">
                    <SwaggyLogo className="logo" />
                </LogoContainer>
                <NavLinks>
                    <NavLink to="/shop">
                        SHOP
                    </NavLink>
                    {
                        currentUser
                            ? <NavLink as="span" onClick={signOutUser}>Sign Out</NavLink>
                            : <NavLink to="/auth">SIGN IN</NavLink>
                    }
                    <CartIcon />
                </NavLinks>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </>
    );
};

export default Navigation;