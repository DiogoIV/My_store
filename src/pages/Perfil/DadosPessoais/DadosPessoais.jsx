
import { useState } from 'react'
import './dadosPessoais.css'

function DadosPessoais() {

    const [editar, setEditar] = useState(false)

    const [editarSenha, setEditarSenha] = useState(false)

    return (
        <main className='container-principal-dados'>

            <h1>Dados Pessoais</h1>

            <section className='sessao-dados-valores'>

                <h2>Informações pessoais</h2>




                {!editar ? (
                    <ul className='dados-valores'>
                        <li className="valores-pessoais">
                            <h3>Nome</h3>
                            <span>Diogo</span>
                        </li>

                        <li className="valores-pessoais">
                            <h3>Sobrenome</h3>
                            <span>Rodrigues</span>
                        </li>

                        <li className="valores-pessoais">
                            <h3>E-mail</h3>
                            <span>diogo@email.com</span>
                        </li>

                        <li className="valores-pessoais">
                            <h3>Telefone</h3>
                            <span>(11) 99999-9999</span>
                        </li>

                        <li className="container-btn-editar-dados">
                            <button className="btn-editar-dados" onClick={() => setEditar(!editar)}>
                                Editar dados
                            </button>
                        </li>
                    </ul>

                ) : (

                    <ul className='dados-valores-editar'>

                        <li className='valores-pessoais-editar '>
                            <label htmlFor="nome">Nome</label>
                            <input type="text" id="nome" />
                        </li>

                        <li className='valores-pessoais-editar'>
                            <label htmlFor="sobrenome">Sobrenome</label>
                            <input type="text" id="sobrenome" />
                        </li>

                        <li className='valores-pessoais-editar editar-email'>
                            <label htmlFor="e-mail">E-mail</label>
                            <input type="email" name="" id="" />
                        </li>

                        <li className='valores-pessoais-editar editar-telefone'>
                            <label htmlFor="telefone editar-telefone">Telefone</label>
                            <input type="tel" name="" id="telefone" />
                        </li>

                        <li className='btn-c-s'>
                            <button onClick={() => setEditar(false)}>Cancelar</button>

                            <button>Salvar</button>
                        </li>
                    </ul>
                )}



                <div className='sessao-seguranca'>

                    <h2>Segurança</h2>

                    {!editarSenha ?
                        (
                            <div className='seguranca-valores'>

                                <div className='valores-pessoais'>
                                    <h3>Senha</h3>
                                    <span>••••••••</span>
                                </div>

                                <button className='btn-alterar-senha' onClick={()=> setEditarSenha(!editarSenha)}>
                                    Alterar senha
                                </button>
                            </div>
                        )
                        :
                        (

                            <div className='seguranca-editar-senha'>
                                
                                <div className='editar-senha-valores'>

                                    <label htmlFor="senha-atual">
                                        Senha atual
                                    </label>
                                    <input type="password" name="" id="senha-atual" />

                                </div>

                                <div className='editar-senha-valores'>

                                    <label htmlFor="nova-senha">
                                        Nova senha
                                    </label>
                                    <input type="password" name="" id="nova-senha" />

                                </div>

                                

                                <div className='editar-senha-valores'>

                                    <label htmlFor="confirmar-senha">
                                        Confirmar nova Senha
                                    </label>
                                    <input type="password" name="" id="confirmar-senha" />

                                </div>

                                <div className='btn-c-a'>

                                    <button onClick={()=> setEditarSenha(false)}>
                                        Cancelar
                                    </button>

                                    <button>
                                        Alterar senha
                                    </button>

                                </div>
                                
                            </div>
                        )

                    }



                </div>

            </section>


        </main>
    )
}

export default DadosPessoais