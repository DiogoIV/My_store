
import './SobreSite.css'

function SobreSite() {
    return (
        <main className='container-principal-sobre'>

            <section className='sessao-sobresite'>

                <h1>Sobre o nosso Site</h1>
                <p>Um espaço para que ama plantas e natureza.</p>

            </section>

            <section className='sessao-proposta'>



                <h2>Nossa proposta</h2>

                <p>Tornar mais simples encontrar plantas que combinem com diferentes ambientes e estilos, oferecendo uma experiência prática para quem deseja trazer mais natureza para o dia a dia.</p> 
                
                <p>Além dos produtos, buscamos inspirar novas possibilidades de decoração e ajudar você a encontrar plantas que façam sentido para o seu espaço.</p>



            </section>

            <section className='sessao-service'>

                <div className='service-titulo-principal'>

                    <h2>O que você encontra</h2>

                </div>

                <div className='service-desc'>
                    <h3>Plantas</h3>
                    <p>
                        Encontre espécies para diferentes ambientes.
                    </p>
                </div>

                <div className='service-desc'>
                    <h3>Inspiração</h3>
                    <p>Ideias para decorar seus ambientes.</p>
                </div>

                <div className='service-desc'>
                    <h3>Cuidados</h3>
                    <p>Informações para cuidas das plantas</p>
                </div>

            </section>

            <section className='service-objetivo'>

                <h2>Feito para amantes de plantas</h2>

                <p>Nosso objetivo é reunir produtos, ideias e informações para deixar sua experiência mais simples e agradável.</p>

            </section>


        </main>
    )
}


export default SobreSite