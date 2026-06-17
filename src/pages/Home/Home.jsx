import { produtos, categorias } from '../../data'


import Main from '../../componentes/Main/Main'


function Home() {


    return (
        <Main produtos={produtos} categorias={categorias} />
    )
}

export default Home