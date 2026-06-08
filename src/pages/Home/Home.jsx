import Header from '../../componentes/Header/Header'
import Main from '../../componentes/Main/Main'
import Footer from '../../componentes/Footer/Footer'

function Home({produtos, categorias}) {
    return(
        <>
            <Header produtos={produtos}/>
            <Main produtos={produtos} categorias={categorias} />
            <Footer />
        </>
    )
}

export default Home