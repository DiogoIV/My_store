import { Link } from 'react-router-dom'
import { useState } from 'react'
import Header from '../../componentes/Header/Header'
import './Register.css'
import handleSubmit from '../../utils/HandleSubmit'
import { validarRegistro } from '../../utils/Validacao'

function Register() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [erro, setErro] = useState('')

    const [confirmarSenha, setConfirmarSenha] = useState('')

    function validacao(e) {
        e.preventDefault()
        const erros = validarRegistro(nome, email, senha, confirmarSenha)
        if (erros) {
            setErro(erros)
            return 
        }

        setErro('')
    }


    return (
        <>
            <Header modo="login" />

            <main className='container-principal'>

                <section className='container-register'>

                    <form action="" method="post" className='form-register' onSubmit={validacao}>

                        <h1 className='titulo-register'>Criar conta</h1>

                        <div className="campo">
                            <label htmlFor="usu">Nome</label>
                            <input type="text" id="usu" autoComplete="username" placeholder='Nome'
                                value={nome}
                                onChange={(e)=>setNome(e.target.value)} />
                        </div>

                        <div className="campo">
                            <label htmlFor="email">E-mail</label>
                            <input type="text" id="email" autoComplete="email" placeholder='Email'
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)} />
                        </div>

                        <div className="campo">
                            <label htmlFor="senha">Senha</label>
                            <input type="password" id="senha" autoComplete="new-password" placeholder='nova Senha'
                                value={senha}
                                onChange={(e)=>setSenha(e.target.value)}
                            />
                        </div>

                        <div className="campo">
                            <label htmlFor="confsenha">Confirmar Senha</label>
                            <input type="password" id="confsenha" autoComplete="new-password" placeholder='Confirmar senha'
                                value={confirmarSenha}
                                onChange={(e)=>setConfirmarSenha(e.target.value)}
                            />
                        </div>

                        <div className='container-btn'>
                            <button type="submit" className='btn'>Criar conta</button>
                        </div>

                        {erro && (
                            <span className='mensagem-erro'>
                                {erro}
                            </span>
                        )}

                        <p className='texto-cadastro'>
                            Já Possui conta? <Link to="/Login" className='link-login'>Entrar</Link>
                        </p>
                    </form>
                </section>
            </main>

        </>
    )
}


export default Register