import { Link } from 'react-router-dom'
import './OrderSucess.css'

import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext/CartContext';

import { FiPackage, FiTruck, FiCalendar, FiCreditCard, FiMapPin, FaCheck, GiCottonFlower } from "../../assets/icons";

function OrderSucess() {
    const { resultadoResumo, quantidadeCart, cart, setCart } = useContext(CartContext)

    const valorescart = cart.map(item => {
        return (
            <div className='cart-resumo-order'>

                <div>
                    <img src={item.imagem} alt={item.alt} className='img-order' />
                </div>


                <h3>{item.nome}</h3>
                <span className='quantidade-order'>({item.quantidade}x)</span>

            </div>
        )
    })
    console.log(cart)
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

            <section className='container-resumo'>

                <h2>Resumo do pedido</h2>

                <div className='campo-resumo'>

                    {valorescart}

                    <div className='resultado-resumo'>
                        <p>Subtotal: <span className='valores-resumo'>R$ {resultadoResumo.subtotal.toFixed(2)}</span></p>

                        <p>Frete: <span className='valores-resumo'>R$ {resultadoResumo.frete.toFixed(2)}</span></p>

                        <p>Total: <span className='valores-resumo'>R${resultadoResumo.total.toFixed(2)}</span></p>
                    </div>
                </div>
            </section>

            <section className='campo-links'>

                <Link to="/orders" className='btn-primary btn-pedidos'>
                    Ver meus pedidos
                </Link>

                <Link to="/" className='btn-secondary btn-pedidos' onClick={ () => setCart([])}>
                    Continuar comprando
                </Link>
            </section>

        </main>
    )
}

export default OrderSucess 