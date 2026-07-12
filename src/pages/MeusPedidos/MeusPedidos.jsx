import './MeusPedidos.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { PedidoContext } from '../../Context/pedidoContext/PedidoContext'

function MeusPedidos() {
    const {pedidos} = useContext(PedidoContext)
    console.log('meus pedidos',pedidos)

    const cartPedidos = pedidos.map(ped => 
         (
            <div className="pedido" key={ped.id}>

                    <header className="pedido-topo">
                        <p className='valor-pedido'>
                            Pedido: <span className='pedido-valores'>#{ped.id}</span>
                        </p>
                        
                        <span className="pedido-valores pedido-status">{ped.status}</span>

                    </header>

                    <section className="pedido-corpo">

                        <p>Data: <span className="pedido-valores">{ped.data}</span></p>

                        {ped.produtos.map(produto => (

                            <div key={produto.id} className='pedido-produto'>
                                <img src={produto.imagem} alt={produto.alt}  className='img-produtos'/>

                                <div className='produto-valores'>
                                    <p className=''>{produto.nome}</p>
                                    <p className='pedido-valores pedido-quantidade'>
                                        Quantidade: 
                                        <span >{produto.quantidade}</span>
                                    </p>
                                    
                                </div>
                            </div>
                        ))}
                        
                    </section>
                    <footer className="pedido-rodape">

                        <p className='pedido-total'>
                            Total: <span className='pedido-valores'>R${ped.total.total.toFixed(2)}</span>
                        </p>

                        <Link to="" className='btn-detalhes'>
                            Ver detalhes
                        </Link>

                    </footer>
                </div>
        )
    )
    return (
        <main className="principal-meuspedidos">

            <h1>Minhas Compras</h1>
            <section className='container-pedido'>                       {cartPedidos}         
            </section>

        </main>
    )
}


export default MeusPedidos