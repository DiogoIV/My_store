import { useState } from 'react'
import './Favoritos.css'
import { produtos } from '../../data'
import { FaRegHeart } from 'react-icons/fa'

function Favoritos () {
    
    const [favorito, setFavorito] = useState(produtos)
    
    function removercart (ID) {
        const itensRemovidos = favorito.filter(item => item.id !== ID);

        return setFavorito(itensRemovidos)
    }
  

    const cartfavorito = favorito.map(el => {
        return (
            <div className='card-favoritos' key={el.id} >
                <div className='primary-favoritos'>

                    <img src={el.imagem} alt={el.alt} />
                    
                    <div className='primary-valores'>
                        <h3>{el.nome}</h3>
                        <p>{el.descricao}</p>
                        <span>{el.preco}</span>
                    </div>
                    
                </div>

                <div className='secudary-favoritos'>

                    <button>Adicionar ao carrinho</button>

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