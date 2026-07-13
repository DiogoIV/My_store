import './Produtos.css'
import { useParams } from 'react-router-dom'



function Produtos() {
    const { id } = useParams()

    return (
        <main className='container-principal-produtos'>

            <section className='produtos-descricao'>

                <div className='descricao-imagem'>

                </div>

                <div className='descricao-desc'>

                    <div>
                        <p>Nome: <span>jade</span></p>
                        <p>Preço: <span>R$ 45,55</span></p>
                        <p>Descrição: <span>jade</span></p>
                    </div>


                    <button type='button'>
                        
                        Adicionar ao carrinho
                        
                    </button>

                </div>

            </section>
        </main>
    )
}

export default Produtos