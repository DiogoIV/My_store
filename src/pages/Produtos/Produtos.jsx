import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext/CartContext'

import './Produtos.css'
import { useParams } from 'react-router-dom'
import { produtos } from '../../data'




import { FaStar } from 'react-icons/fa'




function Produtos() {
    const { id } = useParams()
    const { adicionarProduto } = useContext(CartContext)

    const produtosSelecionado = produtos.find(produto => produto.id === id)

    function produtosRelacionados() {
        const produtosRelacio = produtos.filter(item =>
            produtosSelecionado.categoria === item.categoria && produtosSelecionado.id !== item.id
        )
        return produtosRelacio
    }

    const produtosRelacio = produtosRelacionados()

    const cardProdutosRelacio = produtosRelacio.map((el) => {
        return (
            <div className="produto-relacionado-card" key={el.id}>

                <div className="produto-relacionado-img">
                    <img src={el.imagem} alt={el.nome} />
                </div>

                <div className="produto-relacionado-info">

                    <h3>{el.nome}</h3>

                    <span>
                        R$ {el.preco.toFixed(2)}
                    </span>

                    <button
                        onClick={() => adicionarProduto(el)}
                    >
                        Adicionar ao carrinho
                    </button>

                </div>

            </div>
        )
    })

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
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
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


                    <button type='button' className='btn-card-produtos' onClick={() => adicionarProduto(produtosSelecionado)}>

                        Adicionar ao carrinho

                    </button>

                </div>

            </section>


            <section className='produto-descricao desc01'>

                <h2>Descrição</h2>
                <p>{produtosSelecionado.descricaoLonga}</p>

            </section>

            <section className='produto-descricao'>

                <h2>Cuidados</h2>

                <p>{produtosSelecionado.cuidados}</p>
            </section>

            <section className='produtos-relacionados'>
                <h2>Produtos relacionados</h2>

                <div className='container-card-relacionados'>
                    {cardProdutosRelacio}
                </div>


            </section>
        </main>
    )
}

export default Produtos