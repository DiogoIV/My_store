import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext/CartContext'
import './ProductCard.css'

function ProductCard({produto}) {
    
    const {adicionarProduto} = useContext(CartContext)

    return (
        <div className="container_cards">
                <div className="img_cards">
                    <img src={produto.imagem} alt={produto.alt} />
                </div>
                <div className='cards_desc'>
                    <h3>{produto.nome}</h3>
                    <p>{produto.descricao}</p>
                    <span className="price"> R$ {produto.preco.toFixed(2)}</span>

                    <button className='btn_buy' onClick={()=> {  
                       adicionarProduto(produto)}}>Comprar</button>
            </div>

        </div>
    )
}

export default ProductCard