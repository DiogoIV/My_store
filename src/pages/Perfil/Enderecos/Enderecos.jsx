import './enderecos.css'


function Enderecos() {
    return (
        
        <main className='container-principal-enderecos'>

            <h1>Enderecos</h1>

            <section className='sessao-enderecos'>

                <div className='enderecos-dados'>
                    <h2>Endereço principal</h2>

                    <ul>
                        <li>Rua Miranda silva </li>
                        <li>Cidade Tiradentes </li>
                        <li>São Paulo - SP</li>
                        <li>Cep: 00000 </li>
                    </ul>

                    <div className='dados-btn'>
                        <button>Editar</button>
                        <button>Excluir</button>
                    </div>
                </div>

                <div>
                    <button>
                        + Adicionar endereço
                    </button>
                </div>

            </section>

        </main>
    )
}

export default Enderecos