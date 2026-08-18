import { Link } from 'react-router-dom'
import { useState } from 'react'
import Header from '../../componentes/Header/Header'
import './Register.css'
import { validarRegistro } from '../../utils/Validacao'

import Cadrasto from '../../api/auth'

function Register() {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [erro, setErro] = useState('')

    const [mensagem, setMesagem] = useState('')
    const [tipo, setTipo] = useState('')

    const [confirmarSenha, setConfirmarSenha] = useState('')

    async function validacao(e) {

        e.preventDefault()

        const erros = validarRegistro(nome, email, senha, confirmarSenha)

        if (erros) {
            setErro(erros)
            return 
        }

        const dadosRegister =  {
            nome: nome,
            email: email, 
            senha: senha,
            confirmarSenha: confirmarSenha
        }

        const resultado = await Cadrasto(dadosRegister)

        setMesagem(resultado.mensagem)
        setTipo(resultado.tipo)

        setErro('')

    }


    return (
        <>
            <Header modo="login" />

            <main className='container-principal'>

                <section className='container-register' >

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
                            <button  className='btn'>Criar conta</button>
                        </div>                    

                        {mensagem && (
                            <span className={`mensagem ${tipo}`}>
                                {mensagem}
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