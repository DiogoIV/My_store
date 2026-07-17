import './Produtos.css'
import { useParams } from 'react-router-dom'
import { produtos } from '../../data'


import { FaStar } from 'react-icons/fa'

function Produtos() {
    const { id } = useParams()

    console.log(`valor do id da url ${id}`)

    const produtosSelecionado = produtos.find(produto => produto.id === id)

    console.log(produtosSelecionado)
    return (
        <main className='container-principal-produtos'>

            <section className='produtos-card'>

                <div className='descricao-imagem'>
                    <img src={produtosSelecionado.imagem} alt={produtosSelecionado.alt} />
                </div>

                <div className='card-desc'>

                    <div className='card-valores'>

                        <h1>{produtosSelecionado.nome}</h1>

                        <div className='avaliacoes'>
                            <div className='estrelas'>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                            </div>

                            <span className='avaliacoes-quantidade'>{`${produtosSelecionado.avaliacao} (${produtosSelecionado.totalAvaliacoes} avaliações)`}</span>
                        </div>







                        <div className='card-valores-categoria'>
                            <p className='preco'> R$    {produtosSelecionado.preco.toFixed(2)}</p>

                            <p className='categoria'>Categoria: <span className='categoria-valor'>{produtosSelecionado.categoria}</span>
                            </p>

                            <p className='categoria'>Rega: <span className='categoria-valor'>{produtosSelecionado.regamento}</span></p>
                            <p className='categoria'>Altura: <span className='categoria-valor'>{produtosSelecionado.altura}</span></p>
                        </div>
                    </div>


                    <button type='button' className='btn-card-produtos'>

                        Adicionar ao carrinho

                    </button>

                </div>

            </section>


            <section className='produto-descricao'>
                
                <h2>Descrição</h2>
                <p>{produtosSelecionado.descricaoLonga}</p>

            </section>

            <section className='produto-descricao'>

                <h2>Cuidados</h2>

                <p>{produtosSelecionado.cuidados}</p>
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