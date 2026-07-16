import './Produtos.css'
import { useParams } from 'react-router-dom'
import { jasmim } from '../../assets/imagens/produtos/flores'
import { FaStar } from 'react-icons/fa'

function Produtos() {
    const { id } = useParams()

    return (
        <main className='container-principal-produtos'>

            <section className='produtos-card'>

                <div className='descricao-imagem'>
                    <img src={jasmim} alt="" />
                </div>

                <div className='card-desc'>

                    <div className='card-valores'>

                        <h1>Jasmim </h1>

                        <div className='avaliacoes'>
                            <div className='estrelas'>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                            </div>

                            <span className='avaliacoes-quantidade'>4.8 (42 avaliações)</span>
                        </div>







                        <div className='card-valores-categoria'>
                            <p className='preco'>R$ 45,55</p>

                            <p className='categoria'>Categoria: <span className='categoria-valor'>Plantas internas</span></p>
                            <p className='categoria'>Rega: <span className='categoria-valor'>2x por semana</span></p>
                            <p className='categoria'>Altura: <span className='categoria-valor'>40cm</span></p>
                        </div>
                    </div>


                    <button type='button' className='btn-card-produtos'>

                        Adicionar ao carrinho

                    </button>

                </div>

            </section>


            <section className='produto-descricao'>
                <h2>Descrição</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo nostrum sequi voluptatibus laborum ut error nisi optio eius. Deserunt dolores aliquid culpa reprehenderit nisi officia, debitis sint optio ex praesentium.</p>
            </section>

            <section className='produto-cuidados'>

                <h2>Cuidados</h2>

                <span>Luz</span>
                <span>Rega</span>
                <span>Solo</span>
                <span>Temperatura</span>
            </section>

            <section className='produtos-relactionados'>
                <h2>Produtos relacionados</h2>

                <div>

                </div>
            </section>
        </main>
    )
}

export default Produtos