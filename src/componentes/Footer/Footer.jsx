import './Footer.css'
import { FaLeaf, RiFlowerFill } from '../../assets/icons'
import { Link } from 'react-router-dom'

function Footer() {
    return (

        <footer className="container_footer">

            <div className="footer_descriptions">
                <FaLeaf className="icon_logo " />
                <span className='logo_desc'>Planta shop</span>
                <p>Plantas para deixar sua casa mais viva <RiFlowerFill /> </p>
            </div>

            <div className="links_footer">
                <ul>
                    <li><h3 className="t3-footer">Sobre</h3></li>
                    <li><Link to="/sobresite">Sobre o Site</Link></li>
                    <li><Link to="/politicas">Políticas</Link></li>
                    <li><Link to="/contato">Contato</Link></li>
                </ul>
            </div>

            <div className="footer-redes links_footer">
                <ul>
                    <li>
                        <h3 className="t3-footer ">Redes Sociais</h3>
                    </li>
                    <li><a href="https://www.instagram.com/diogo_rodriguesl/"
                        target="_blank"
                        rel="noopener noreferrer"

                    >Instagram</a></li>
                    <li>
                        <a href="https://github.com/DiogoIV?tab=repositories"
                            target="_blank"
                            rel="noopener noreferrer"
                        >Github</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/diogorodriguesweb/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B78YIbeyRSyW5x%2BaOD7ttDg%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                    >Linkedin</a>
                    </li>
                </ul>
            </div>

            <div className="copyright">
                <p>© 2026 Planta Shop</p>
            </div>
        </footer>
    )
}

export default Footer