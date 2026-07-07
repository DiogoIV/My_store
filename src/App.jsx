import Header from './componentes/Header/Header'
import Footer from './componentes/Footer/Footer'

import { Outlet } from 'react-router-dom'

function App() {



    return (
        <>
            <Header />

            <Outlet />

            <Footer />
        </>


    )
}


export default App
