
import './dadosPessoais.css'

function DadosPessoais() {

    return (
        <main className='container-principal-dados'>

            <h1>Dados Pessoais</h1>

            <section className='sessao-dados-valores'>

                <h2>Informações pessoais</h2>


                <ul>
                    <li>
                        <h3>Nome</h3>
                        <span>Diogo</span>
                    </li>

                    <li>
                        <h3>Sobrenome</h3>
                        <span>Rodrigues</span>
                    </li>

                    <li>
                        <h3>E-mail</h3>
                        <span>diogo@email.com</span>
                    </li>

                    <li>
                        <h3>Telefone</h3>
                        <span>(11) 99999-9999</span>
                    </li>

                    <li>
                        <button>
                            Editar dados
                        </button>
                    </li>
                </ul>

            </section>
        </main>
    )
}

export default DadosPessoais