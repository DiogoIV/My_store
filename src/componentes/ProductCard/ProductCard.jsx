
import './ProductCard.css'

function ProductCard({produto}) {
    
    

    return (
        <div className="container_cards">
                <div className="img_cards">
                    <img src={produto.imagem} alt="planta_Mandacaru" />
                </div>
                <div className='cards_desc'>
                    <h3>{produto.nome}</h3>
                    <p>{produto.descricao}</p>
                    <span className="price">{produto.preco}</span>
                    <button className='btn_buy'>Comprar</button>
            </div>

        </div>
    )
}

export default ProductCard