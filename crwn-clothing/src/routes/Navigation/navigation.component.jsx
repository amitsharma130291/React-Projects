import { Outlet, Link } from "react-router-dom"
import { ReactComponent as CrownLogo  } from "../../assets/crown.svg"
import "./navigation.styles.scss"
const Navigation = () => {
    return(
        <>
            <div className="navigation">                
                <Link to="/" className="logo-container"><CrownLogo /></Link>           
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">Shop</Link>
                    <Link className="nav-link" to="auth">Sign In</Link>
                </div>
            </div>
            <Outlet/>           
        </>
    )
}

export default Navigation