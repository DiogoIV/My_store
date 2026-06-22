import { useState } from 'react'
import './Favoritos.css'
import { produtos } from '../../data'

function Favoritos () {
    
    const [favorito, setFavorito] = useState(produtos)

    const cartfavorito = favorito.map(el => {
        return (
            <div className='card-favoritos' >
                <div className='primary-favoritos'>

                    <img src={el.imagem} alt={el.alt} />
                    
                    <div>
                        <h2>{el.nome}</h2>
                        <span>R${el.preco}</span>
                    </div>
                    
                </div>

                <div className='secudary-favoritos'>

                    <button>Adicionar ao carrinho</button>

                    <button>
                        Remover dos favoritos
                    </button>
                </div>
            </div>
        )
    })
    
    return (
        <main className='container-principal-favorito'>

            <section>
                <h1>Favoritos</h1>
                <p>Produtos que vocë salvou.</p>
            </section>

            <section>
                {cartfavorito}
            </section>
            
        </main>
    )
}


export default Favoritos