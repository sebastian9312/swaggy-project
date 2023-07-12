import { Link, Outlet } from "react-router-dom";
import { ReactComponent as SwaggyLogo } from "../../assets/swaggy.svg";

import "./navigation.styles.scss";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";

import { signOutUser } from "../../utils/firebase/firebase";

const Navigation = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);

    const signOutHandler = async () => {
        const response = await signOutUser();
        setCurrentUser(null);
    };

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
                            ? <span onClick={signOutHandler} className="nav-link">Sign Out</span>
                            : <Link className="nav-link" to="/auth">SIGN IN</Link>
                    }
                </div>
            </div>
            <Outlet />
        </>
    );
};

export default Navigation;