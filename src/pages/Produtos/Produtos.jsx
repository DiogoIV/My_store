import './Produtos.css'
import { useParams } from 'react-router-dom'
import { jasmim } from '../../assets/imagens/produtos/flores'


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
                        <div>
                            <h1>Jasmim </h1>
                            <p>⭐⭐⭐⭐⭐ (42 avaliações)</p>
                        </div>

                        <p>Preço: <span>R$ 45,55</span></p>

                        <p>Descrição: <span>jade</span></p>

                        <div>
                            <p>Categoria: <span>Plantas internas</span></p>
                            <p>Rega: <span>2x por semana</span></p>
                            <p>Altura: 40cm</p>
                        </div>
                    </div>


                    <button type='button'>
                        
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