import Header from './componentes/Header/Header'
import Footer from './componentes/Footer/Footer'
import ScrolltoTop from './componentes/ScrollToTop/ScrollToTop'

import { Outlet } from 'react-router-dom'

function App() {



    return (
        <>
            <Header />

            <ScrolltoTop/>

            <Outlet />

            <Footer />
        </>


    )
}


export default App
