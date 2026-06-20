import { Link } from 'react-router-dom'
import './OrderSucess.css'


import { FiPackage, FiTruck, FiCalendar, FiCreditCard, FiMapPin, FaCheck, GiCottonFlower } from "../../assets/icons";

function OrderSucess() {
    return (

        <main className='container-ordersucess'>

            <section className='campo-realizado'>

                <h1><FaCheck className='icon-check' /> Pedido realizado com sucesso!</h1>

                <p>Obrigado pela sua compra.</p>

                <p>Seu pedido já foi recebido e será preparado para envio.</p>
            </section>

            <section className='campo-info'>

                <h2>Informações do pedido</h2>

                <div className="cart-info">
                    <p><FiPackage /> Pedido nº <span>#000124</span></p>
                    <p><FiCalendar /> Data: <span>12/07/2025</span></p>
                    <p><FiTruck /> Previsão de entregas <span>15 a 18 de julho</span> </p>
                    <p><FiCreditCard /> Forma de pagamentos <span>PIX</span> </p>
                    <p><FiMapPin /> Endereço
                        <address>
                            Rua das Flores, 123 <br />
                            São Paulo - SP
                        </address>
                    </p>
                </div>

            </section>

            <section className='campo-resumo'>

                <h2>Resumo do pedido</h2>

                <p><span><GiCottonFlower />monstera Deliciosa</span> <span>R$ 89,90</span></p>

                <p>Frete <span>R$12,00</span></p>

                <p>Total <span>R$141,80</span></p>
            </section>

            <section className='campo-links'>

                <Link to="/orders" className='btn-primary'>
                    Ver meus pedidos
                </Link>

                <Link to="/" className='btn-secondary'>
                    Continuar comprando
                </Link>
            </section>

        </main>
    )
}

export default OrderSucess 