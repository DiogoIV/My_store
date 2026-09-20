
import './dadosPessoais.css'

function DadosPessoais() {

    return (
        <main className='container-principal-dados'>

            <h1>Dados Pessoais</h1>

            <section className='sessao-dados-valores'>

                <h2>Informações pessoais</h2>


                <ul className='dados-valores'>

                    <li className='valores-pessoais'>
                        <h3>Nome</h3>
                        <span>Diogo</span>
                    </li>

                    <li className='valores-pessoais'>
                        <h3>Sobrenome</h3>
                        <span>Rodrigues</span>
                    </li>

                    <li className='valores-pessoais'>
                        <h3>E-mail</h3>
                        <span>diogo@email.com</span>
                    </li>

                    <li className='valores-pessoais'>
                        <h3>Telefone</h3>
                        <span>(11) 99999-9999</span>
                    </li>

                    <li className='container-btn-editar-dados'>
                        <button className='btn-editar-dados'>
                            Editar dados
                        </button>
                    </li>
                </ul>

                <div className='sessao-seguranca'>

                    <h2>Segurança</h2>

                    <div className='seguranca-valores'>

                        <div className='valores-pessoais'>
                            <h3>Senha</h3>
                            <span>••••••••</span>
                        </div>

                        <button className='btn-alterar-senha'>
                            Alterar senha
                        </button>
                    </div>

                </div>

            </section>


        </main>
    )
}

export default DadosPessoais