

import HeaderCheckout from "../../componentes/HeaderCheckout/HeaderCheckout.jsx"
import Footer from "../../componentes/Footer/Footer"
import { Outlet } from "react-router-dom"


function CheckoutLayout() {
    return (
        <>
            <HeaderCheckout />
            <Outlet />
            <Footer />
        </>

    )
}

export default CheckoutLayout