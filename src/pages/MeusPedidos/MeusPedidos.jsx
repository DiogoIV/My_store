import './MeusPedidos.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { PedidoContext } from '../../Context/pedidoContext/PedidoContext'

function MeusPedidos() {
    const {pedidos} = useContext(PedidoContext)


    const cartPedidos = pedidos.map(ped => {
        return (
            <div className="pedido" key={ped.id}>
                    <header className="pedido-topo">
                        <span>Pedido {ped.id}</span>
                        <span className="status">{ped.status}</span>
                    </header>
                    <section className="pedido-corpo">
                        <p>Data: {ped.data}</p>

                        {ped.produtos.map(produto => (

                            <div key={produto.id}>
                                <img src={produto.imagem} alt={produto.alt} />
                                <p>{produto.nome}</p>
                                <span>
                                    Quantidade: {produto.quantidade}
                                </span>
                            </div>
                        ))}
                        
                    </section>
                    <footer className="pedido-rodape">
                        <span>Total: {ped.total}</span>
                        <Link to="">
                            Ver detalhes
                        </Link>
                    </footer>
                </div>
        )
    })
    return (
        <main className="principal-meuspedidos">

            <h1>Minhas Compras</h1>



            <section className='container-pedido'>                       {cartPedidos}         
            </section>

        </main>
    )
}


export default MeusPedidos