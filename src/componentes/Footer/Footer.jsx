import './Footer.css'
import { FaLeaf, RiFlowerFill } from '../../assets/icons' 

function Footer() {
    return (
        <footer className="container_footer">       
            <div className="footer_descriptions">
                <FaLeaf className="icon_logo "/>
                <span className='logo_desc'>Planta shop</span>
                <p>Plantas para deixar sua casa mais viva <RiFlowerFill /> </p>
            </div>

            <div className="links_footer">                
                <ul>
                    <li><h3 className="t3-footer">Sobre</h3></li>
                    <li><a href="#">Sobre o Site</a></li>
                    <li><a href="#">Políticas</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </div>

            <div className="footer-redes links_footer">
                <ul>
                    <li>
                        <h3 className="t3-footer ">Redes Sociais</h3>
                    </li>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Github</a></li>
                    <li><a href="#">Linkedin</a></li>
                </ul>
            </div>

            <div className="copyright">
                <p>© 2026 Planta Shop</p>
            </div>
        </footer>
    )
}

export default Footer