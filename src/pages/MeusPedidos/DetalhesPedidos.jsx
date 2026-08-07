
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

            <Link to={`/produtos/${item.id}`} className='detalhes-img'>
                <img src={item.imagem} alt={item.alt} />
            </Link>

            <div className='detalhes-valores'>

                <Link to={`/produtos/${item.id}`} className='btn-card-detalhes'>
                    <h2>{item.nome}</h2>
                </Link>

                <p>Quantidade: <span className='detalhes-resumo-cart'>{item.quantidade}</span></p>

                <p>Preço unitário: <span className='detalhes-resumo-cart'>R$ {item.preco.toFixed(2)}</span></p>

                <p className='detalhes-subtotal'>Subtotal:<span >R$ {(item.quantidade * item.preco).toFixed(2)}</span></p>


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
                        <h1 className='detalhes-t1'>Status</h1>
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

                    <div className='detalhes-resumo-valores'>

                        <span>Subtotal </span>

                        <span  className='valores-span'>R${produto.total.subtotal.toFixed(2)}</span>

                    </div>

                    <div className='detalhes-resumo-valores'>

                        <span>Frete</span>

                        <span className='valores-span'>R$ {produto.total.frete.toFixed(2)}</span>

                    </div>

                    <div className='detalhes-resumo-total'>

                        <span>Total</span>

                        <span> R${produto.total.total.toFixed(2)}
                        </span>

                    </div>

                </div>


            </section>


        </main>
    )

}

export default DetalhesPedidos