import { Link } from "react-router-dom"
import { FaUser, FaShoppingBag, FaMapMarkerAlt, FaRegCommentDots, MdEmail } from "../../../assets/icons/index"

import './minhaConta.css'

//corrija a url meus-dados para minha-conta/meus-dados

function MinhaConta() {

    return (

        <main className="container-minha-conta">

            <h1>Minha Conta</h1>

            <section className="sessao-introducao">

                <h2>Bem-vindo, <span>Diogo Rodrigues da silva</span></h2>

                <div className="introducao-email">
                    <MdEmail/>
                    <span>dingorodrigues100@gmail.com</span>
                </div>
                
                <Link to="dados-pessoais" className="introducao-btn-pessoais">Editar dados</Link>

            </section>

            
            <section className="sessao-meus-dados">
                
                <ul className="container-atalhos">

                    <li>
                        <Link to="dados-pessoais" className="btn-atalhos">
                            <FaUser/>
                            Dados Pessoais
                        </Link>

                    </li>

                    <li>
                        <Link to="meus-pedidos" className="btn-atalhos">
                            <FaShoppingBag/>
                            Meus Pedidos
                        </Link>

                    </li>

                    <li>
                        <Link to="enderecos" className="btn-atalhos">
                            <FaMapMarkerAlt/>
                            Endereços
                        </Link>

                    </li>

                    <li>
                        <Link to="fale-conosco" className="btn-atalhos">
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