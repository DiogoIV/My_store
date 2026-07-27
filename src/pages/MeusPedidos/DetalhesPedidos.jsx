
import './DetalhesPedidos.css'

import { useContext } from 'react'
import { PedidoContext } from '../../Context/pedidoContext/PedidoContext'

import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

import { useParams } from 'react-router-dom'
import { produtos } from '../../data'


function DetalhesPedidos() {

    const { id } = useParams()
    const ID = Number(id)


    const { pedidos } = useContext(PedidoContext)


    const produto = pedidos.find(el => el.id == ID)
    const produtoCart = produto.produtos.map(item => (

        <div className='detalhes-cart'>

            <div className='detalhes-img'>
                <img src={item.imagem} alt={item.alt} />
            </div>

            <div>

                <h2>{item.nome}</h2>
                <p>Quantidade: <span>{item.quantidade}</span></p>

                <p>Preço unitário: <span>R$ {item.preco.toFixed(2)}</span></p>

                <p>Subtotal: <span>R$ {(item.quantidade * item.preco).toFixed(2)}</span></p>


            </div>

        </div>

    ))


    return (
        <main className='container-detalhes-pedidos'>

            <section className='sessao-detalhes-pedidos'>

                <Link to="/meuspedidos" className='btn-detalhes-voltar'>
                    <FaArrowLeft /> Voltar para Meus Pedidos
                </Link>

                <div className='detalhes-pedidos-container'>
                    <div className='detalhes-titulo'>
                        <h1 className='detalhes-t1'>Detalhes do Pedido</h1>
                    </div>
                    <div className='detalhes-status'>
                        <div className='status-pedido'>
                            <p><strong>Pedido:</strong> #{produto.id} </p>
                            <div className="pedido-status-detalhes">
                                <span className="pedido-circle"></span>
                                <span>{produto.status}</span>
                            </div>
                        </div>
                        <p className='detalhes-data'><strong>Data:</strong> <span>{produto.data}</span></p>
                    </div>
                </div>



            </section>



            <section className='sessao-detalhes-produtos'>

                <h2 className='titulo-detalhes-produtos'>Produtos do pedido</h2>

                <div className='detalhes-valores-produtos'>
                    {produtoCart}
                </div>

            </section>

            <section className='detalhes-resumo'>
                <h2>Resumo</h2>

                <div className='resumo-valores'>

                    <p>Subtotal ............... <span>R${produto.total.subtotal.toFixed(2)}</span></p>
                    <p>Frete ............... <span>R${produto.total.frete.toFixed(2)}</span></p>
                    <p>Total ............... <span>R${produto.total.total.toFixed(2)}</span></p>

                </div>


            </section>


        </main>
    )

}

export default DetalhesPedidos