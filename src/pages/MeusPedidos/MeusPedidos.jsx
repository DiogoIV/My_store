import './MeusPedidos.css'
import { Link } from 'react-router-dom'


function MeusPedidos() {
    return (
        <main className="principal-meuspedidos">

            <h1>Minhas Compras</h1>



            <section className='container-pedido'>
                <div className="pedido">
                    <header className="pedido-topo">
                        <span>Pedido #1025</span>
                        <span className="status entregue">Entregue</span>
                    </header>
                    <section className="pedido-corpo">
                        <p>Data: 06/07/2026</p>
                        <p>Notebook Dell</p>
                    </section>
                    <footer className="pedido-rodape">
                        <span>Total: R$ 4.350,50</span>
                        <Link to="">
                            Ver detalhes
                        </Link>
                    </footer>
                </div>

                
                
            </section>

        </main>
    )
}


export default MeusPedidos