import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext/CartContext'
import './ProductCard.css'
import { Link } from 'react-router-dom'

function ProductCard({ produto }) {

    const { adicionarProduto } = useContext(CartContext)

    return (
        <div className="container_cards">

            <Link to={`/produtos/${produto.id}`} className='btn-cards'>
                <div className="img_cards">
                    <img src={produto.imagem} alt={produto.alt} />
                </div>

                <div className='cards_desc'>
                    <h3>{produto.nome}</h3>
                    <p>{produto.descricao}</p>
                    
                </div>

            </Link>

            <div className='acoes'>
                <span className="price"> R$ {produto.preco.toFixed(2)}</span>
                <button className='btn_buy' onClick={() => {
                    adicionarProduto(produto)
                }}>Comprar</button>
            </div>



        </div>
    )
}

export default ProductCard