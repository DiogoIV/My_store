
import { useParams } from 'react-router-dom'
import { destaques } from '../../data/destaques/destaque'
import './Carousel.css'


function Carousel() {

    const { slug } = useParams()

    console.log(slug, 'slug')
    
    const destaque = destaques.filter(el => el.slug === slug)

    console.log(destaque)

    return (

        <main className='container-principal-carousel'>

            <section className='carousel-destaque'>

                <img src="" alt=""  className='carousel-img-destaque'/>

                <div className='carousel-destaque-desc'>

                    <h1>Plantas para seu ambiente</h1>

                    <p>escubra como transformar qualquer ambiente
                        utilizando plantas naturais.
                    </p>

                </div>

            </section>

            <section className='carousel-decoracao'>

                <h2>Por que decorar com plantas?</h2>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quos corporis reiciendis in fuga, quasi voluptates numquam nulla, eaque expedita cum quis praesentium dignissimos a, cumque libero esse. Beatae, vel.</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum labore voluptatum delectus soluta molestiae molestias, officiis hic, omnis reiciendis sed quam suscipit temporibus assumenda dignissimos cumque quasi nihil ullam numquam.</p>

            </section>

            <section className='carousel-local'>

                <img src="" alt=""  className='carousel-img-local'/>
                
                <h2 className='carousel-local-titulo'>Como escolher o local ideal</h2>

                <div className='carousel-local-desc'>

                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae odit et, tenetur possimus corrupti libero quisquam quos blanditiis laboriosam quas assumenda, sequi ipsum. Culpa modi suscipit, eum fugit expedita exercitationem.</p>

                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto magnam ipsam aspernatur dolorum, error perferendis consectetur cum dolor adipisci voluptates eligendi asperiores vel aliquid assumenda voluptate hic sed aperiam dolore.</p>

                </div>

            </section>

            <section className='carousel-dicas'>

                <h2>Dicas rápidas</h2>

                <div className='carousel-dicas-desc'>

                    <p>Prefira locais iluminados.</p>

                    <p>Escolha vasos adequados</p>

                    <p>Evite excesso de água iluminados.</p>

                </div>   

            </section>

            <section className='carousel-ambiente'>

                <img src="" alt=""  />

                <h2>Ambientes inspiradores</h2>

                <div>

                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente ut saepe, maiores porro quaerat amet corrupti neque minima distinctio incidunt cum assumenda nobis repellendus, architecto minus voluptatem eos nam tempora?</p>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident iusto, non facere consequatur expedita, similique animi iure doloremque quaerat, in minima autem dolorem repellat? Et explicabo aspernatur ducimus rem maxime.</p>

                </div>

            </section>

            <section>

                <h2>Conclusão</h2>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est beatae harum, sed modi provident at aliquid, tempore sint impedit, inventore porro deserunt excepturi. Mollitia veritatis numquam voluptate aut. Tenetur, ex.</p>

            </section>

        </main>

    )
}

export default Carousel