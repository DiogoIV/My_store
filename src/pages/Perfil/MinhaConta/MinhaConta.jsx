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
                    <MdEmail className="introducao-icon-email"/>
                    <span>dingorodrigues100@gmail.com</span>
                </div>
                
                <Link to="dados-pessoais" className="introducao-btn-pessoais">Editar dados</Link>

            </section>

            
            <section className="sessao-meus-dados">
                
                

                <ul className="container-atalhos">
                    

                    <li>
                        <Link to="dados-pessoais" className="btn-atalhos">
                            <FaUser className="atalhos-icons"/>
                            <p className="atalhos-texto">Dados Pessoais</p>
                        </Link>

                    </li>

                    <li>
                        <Link to="meus-pedidos" className="btn-atalhos">
                            <FaShoppingBag className="atalhos-icons"/>
                            <p className="atalhos-texto">Meus Pedidos</p>
                        </Link>

                    </li>

                    <li>
                        <Link to="enderecos" className="btn-atalhos">
                            <FaMapMarkerAlt className="atalhos-icons"/>
                            <p className="atalhos-texto">Endereços</p>
                        </Link>
                        

                    </li>

                    <li>
                        <Link to="fale-conosco" className="btn-atalhos">
                            <FaRegCommentDots className="atalhos-icons"/>
                            <p className="atalhos-texto">Fale Conosco</p>
                        </Link>

                    </li>

                                   
                    
                </ul>

            </section>

        </main>

    )

}

export default MinhaConta