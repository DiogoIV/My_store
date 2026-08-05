
import { useParams } from 'react-router-dom'
import { destaques } from '../../data/destaques/destaque'
import './Carousel.css'


function Carousel() {

    const { slug } = useParams()

    console.log(slug, 'slug')

    const destaque = destaques.find(el => el.slug === slug)


    return (

        <main className='container-principal-carousel'>

            <section className='carousel-destaque'>

                <div className='carousel-container-img'>
                    <img src={destaque.img} alt={destaque.alt} className='carousel-img-destaque' />
                </div>

                <div className='carousel-destaque-desc'>

                    <h1>{destaque.titulo}</h1>

                    <p>{destaque.subtitulo}
                    </p>

                </div>

            </section>

            <section className='carousel-decoracao carrousel-sessoes'>

                <h2>{destaque.decoracao.titulo}</h2>

                <p>{destaque.decoracao.texto1}</p>

                <p>{destaque.decoracao.texto2}</p>

            </section>

            <section className='carousel-local carrousel-sessoes'>


                <h2 className='carousel-local-titulo'>{destaque.local.titulo}</h2>

                <div className='carousel-local-desc'>

                    <p>{destaque.local.texto1}</p>

                    <p>{destaque.local.texto2}</p>

                </div>

            </section>

            <section className='carousel-dicas carrousel-sessoes'>

                <h2>{destaque.dicas.titulo}</h2>

                <div className='carousel-dicas-desc'>

                    {destaque.dicas.itens.map(item =>
                        <ul>
                            <li>{item}</li>
                        </ul>
                    )}
                </div>

            </section>

            <section className='carousel-ambiente carrousel-sessoes'>

                <h2>{destaque.ambiente.titulo}</h2>

                <div className='carousel-ambiente-desc'>

                    <p>{destaque.ambiente.texto1}</p>

                    <p>{destaque.ambiente.texto2}</p>

                </div>

            </section>

            <section className='carousel-conclusao carrousel-sessoes'>

                <h2>Comece aos poucos</h2>

                <p>
                    Se você está iniciando no cultivo, escolha espécies de
                    fácil manutenção e observe como elas se adaptam ao seu
                    ambiente antes de ampliar sua coleção.
                </p>

            </section>

        </main>

    )
}

export default Carousel