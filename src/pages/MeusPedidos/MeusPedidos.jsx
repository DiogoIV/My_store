import './meuspedidos.css'
import { Link } from 'react-router-dom'


function MeusPedidos() {
    return (
        <main className="principal-meuspedidos">


            <h1>Minhas Compras</h1>

            <section className='container-lista-pedidos'>
                <div className='lista-pedidos'>

                    <div className='pedido-header'>

                        <span>
                            pedido: #1025
                        </span>

                        <span>
                            Entregue
                        </span>
                    </div>

                    <div className='pedido-body'>
                        <span>06/07/2026</span>

                        <span>Notebook</span>
                    </div>

                    <div className='pedido-footer'>
                        <span>Total: R$ 4.350,500</span>

                        <Link to="">
                            Ver detalhes
                        </Link>

                    </div>
                </div>
            </section>


        </main>
    )
}


export default MeusPedidos