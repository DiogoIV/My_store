import { Link } from "react-router-dom"
import { FaUser, FaShoppingBag, FaMapMarkerAlt, FaRegCommentDots } from "react-icons/fa"

import './minhaConta.css'

//corrija a url meus-dados para minha-conta/meus-dados

function MinhaConta() {

    return (

        <main className="container-minha-conta">
            
            <section className="sessao-minha-conta">

                <h1>Minha Conta</h1>

                <ul className="container-atalhos">

                    <li>
                        <Link to="/dados-pessoais">
                            <FaUser/>
                            Dados Pessoais
                        </Link>

                    </li>

                    <li>
                        <Link to="/meus-pedidos">
                            <FaShoppingBag/>
                            Meus Pedidos
                        </Link>

                    </li>

                    <li>
                        <Link to="/enderecos">
                            <FaMapMarkerAlt/>
                            Endereços
                        </Link>

                    </li>

                    <li>
                        <Link to="/fale-conosco">
                            <FaRegCommentDots/>
                            Fale Conosco
                        </Link>

                    </li>

                                   
                    
                </ul>

            </section>

        </main>

    )

}

export default MinhaConta