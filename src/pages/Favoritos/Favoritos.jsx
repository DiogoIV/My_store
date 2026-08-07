import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext/CartContext'

import './Favoritos.css'
import { produtos } from '../../data'
import { FaRegHeart } from 'react-icons/fa'


function Favoritos () {
    
    const [favorito, setFavorito] = useState(produtos)

    const {adicionarProduto} = useContext(CartContext)
    
    function removercart (ID) {
        const itensRemovidos = favorito.filter(item => item.id !== ID);

        return setFavorito(itensRemovidos)
    }
  

    const cartfavorito = favorito.map(el => {
        return (
            <div className='card-favoritos' key={el.id} >
                <Link to={`/produtos/${el.id}`} className='primary-favoritos'>

                    <div className='primary-img'>
                        <img src={el.imagem} alt={el.alt} />
                    </div>
                    
                    <div className='primary-valores'>
                        <h3>{el.nome}</h3>
                        <p>{el.descricao}</p>
                        <span>R$ {el.preco.toFixed(2)}</span>
                    </div>
                    
                </Link>

                <div className='secudary-favoritos'>

                    <button onClick={()=> adicionarProduto(el)}>Adicionar ao carrinho</button>

                    <button onClick={()=> removercart(el.id)}>
                        Remover dos favoritos
                    </button>
                </div>
            </div>
        )
    })
    
    return (
        <main className='container-principal-favorito'>

            <section className='desc-favoritos'>
                <span className='icon-favoritos'><FaRegHeart/></span>
                <h2>Favoritos</h2>

            </section>

            <section className='section-favoritos'>
                {cartfavorito}
            </section>
            
        </main>
    )
}


export default Favoritos