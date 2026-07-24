
import './DetalhesPedidos.css'

import { useContext } from 'react'
import { PedidoContext } from '../../Context/pedidoContext/PedidoContext'

import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

import { useParams } from 'react-router-dom'
import { produtos } from '../../data'

function DetalhesPedidos() {

    const {id} = useParams()
    const {pedidos} = useContext(PedidoContext)

    const produto = pedidos.find(el=> el.id === id)
    const cardProduto = produto.map(el => 
        (
            <div>
                
            </div>
        )
    )
    

    return (
        <main className='container-detalhes-pedidos'>

            <section className='detalhes-pedidos'>

                <Link to="/meuspedidos" className='detalhes-meuspedidos'>
                    <FaArrowLeft /> Voltar para Meus Pedidos
                </Link>

                <div className='detalhes-pedidos'>
                    <h1>Detalhes do Pedido</h1>

                    <div className='detalhes-pedidos-valores'>
                        <span>Pedido: </span>
                        <span>Entregue</span>
                        
                    </div>
                </div>

                <p className='detalhes-data'>Data: <span>22/07/2026</span></p>

            </section>

            <section className='detalhes-produtos'>

                <h2>Produtos do pedido</h2>

                <div className='detalhes-valores-produtos'>
                    
                </div>

            </section>

            <section className='detalhes-resumo'>
                <h2>Resumo</h2>

                <div className='resumo-valores'>

                    <p>Subtotal ............... <span>r$ 95,70</span></p>
                    <p>Frete ............... <span>r$ 15,00</span></p>
                    <p>Total ............... <span>r$ 110,70</span></p>
                    
                </div>
            </section>


        </main>
    )

}

export default DetalhesPedidos