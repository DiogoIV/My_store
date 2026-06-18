import { Link } from "react-router-dom"
import { FaLeaf } from "react-icons/fa"
import './HeaderCheckout.css'

function HeaderCheckout() {
    return (
        <header className="container-header-checkout">

            <Link to="/" className="logo-checkout">
                <FaLeaf className="icon_checkout" />
                <h1> Planta Shop</h1>
            </Link>
        </header>
    )

}

export default HeaderCheckout