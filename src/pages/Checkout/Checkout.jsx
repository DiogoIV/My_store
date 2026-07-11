import { Link } from "react-router-dom"
import './Checkout.css'

import { useContext } from "react"
import { CartContext } from "../../Context/CartContext/CartContext"
import { PedidoContext } from "../../Context/pedidoContext/PedidoContext"

function Checkout() {

    const { resultadoResumo, quantidadeCart, cart } = useContext(CartContext)
    const { adicionarPedido } = useContext(PedidoContext)

    

    function confirmarPedido() {

        const novoPedido = {
            id: Date.now(),
            data: new Date().toLocaleDateString(),
            status: "Em preparação",
            produtos: [...cart],
            total: resultadoResumo
        };

        adicionarPedido(novoPedido);
    }

    return (
        <>
            <main className="container-checkout">

                <section className="info-entregas">

                    <h2 className="titulo-entregas ">Dados de entrega</h2>

                    <div className="intens-entregas">
                        <h3>Nome</h3>
                        <p>Diogo Rodrigues</p>
                    </div>

                    <div className="intens-entregas">
                        <h3>CEP</h3>
                        <p>08490-000</p>
                    </div>

                    <div className="intens-entregas">
                        <h3>Rua</h3>
                        <p>Rua das Flores</p>
                    </div>

                    <div className="intens-entregas">
                        <h3>Número</h3>
                        <p>123</p>
                    </div>

                    <div className="intens-entregas">
                        <h3>Complemento</h3>
                        <p>Apto 12</p>
                    </div>

                    <div className="intens-entregas">
                        <h3>Cidade</h3>
                        <p>São Paulo</p>
                    </div>

                    <div className="intens-entregas">
                        <h3>Estado</h3>
                        <p>SP</p>
                    </div>

                </section>

                <section className="resumo-pedido">

                    <h2>Resumo do pedido</h2>

                    <div className="produtos-quantidade">
                        <span>{quantidadeCart} produtos</span>
                    </div>

                    <div className="resumo-valores">
                        <p>Subtotal: <span>R$ {resultadoResumo.subtotal.toFixed(2)}</span></p>
                        <p>Frete: <span>R$ {resultadoResumo.frete.toFixed(2)}</span></p>
                        <p>Total: <span>R$ {resultadoResumo.total.toFixed(2)}</span></p>
                    </div>

                    <Link to="sucesso" className="link-confirmar">
                        <button onClick={confirmarPedido}>Confirmar Pedido</button>
                    </Link>



                </section>
            </main>
        </>
    )

}

export default Checkout