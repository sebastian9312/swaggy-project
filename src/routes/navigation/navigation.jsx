import { Link, Outlet } from "react-router-dom";
import { ReactComponent as SwaggyLogo } from "../../assets/swaggy.svg";

import "./navigation.styles.scss";

const Navigation = () => (
    <>
        <div className="navigation">
            <Link className="logo-container" to="/">
                <SwaggyLogo className="logo" />
            </Link>
            <div className="nav-links-container">
                <Link className="nav-link" to="/shop">
                    SHOP
                </Link>
            </div>
        </div>
        <Outlet />
    </>
);

export default Navigation;