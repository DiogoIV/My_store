

import { Link } from 'react-router-dom'
import { useState } from 'react'
import Header from '../../componentes/Header/Header'
import './Login.css'

import { ValidarLogin } from '../../utils/Validacao'
import { Logar } from '../../api/auth'



function Login() {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [erro, setErro] = useState({
        email: '',
        senha: ''
    })
    const [mensagemAviso, setMensagemAviso] = useState({
        ok: '',
        campo: '',
        mensagem: ''
    })



    async function validacao(e) {

        e.preventDefault()

        setErro('')

        const erroLogin =  ValidarLogin(email,senha)

        if(erroLogin.email|| erroLogin.senha) {

            setErro (
                {
                    email: erroLogin.email,
                    senha: erroLogin.senha
                }

            )
            
            return
        }

        try {

            const dadosInputs = {email: email, senha: senha}
            const mensagens = await Logar(dadosInputs)
            setMensagemAviso(mensagens)

        } catch (erro) {

            console.error('Erro ao acessar Rota Logar', erro)

        }


        return
    }



    return (
        <>
            <Header modo="login" />

            <main className="container_principal">

                <section className="container-login">

                    <form className="form-login" onSubmit={validacao}>

                        <h1 className='titulo-login'>Login</h1>

                        <div className="campo">
                            <label htmlFor="email">E-mail</label>
                            <input
                                type="text"
                                id="email"
                                placeholder="Digite seu e-mail" autoComplete='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {erro.email && 
                                <div className='aviso-erro-padrao'>
                                    {erro.email}
                                </div>
                            }
                        </div>

                        <div className="campo">
                            <label htmlFor="senha">Senha</label>
                            <input
                                type="password"
                                id="senha"
                                value={senha}
                                placeholder="Digite sua senha"
                                onChange={(e) => setSenha(e.target.value)}
                            />

                            {erro.senha && 
                                <div className='aviso-erro-padrao'>
                                    {erro.senha}
                                </div>
                            }
                        </div>




                        <div className='campo container-btn'>
                            <button type="submit" className="btn-login btn">
                                Entrar
                            </button>
                            <button type="button" className="btn-forgot btn">
                                <Link to="/esqueci-senha" className='link-esqueci-senha'>Esqueci minha senha</Link>
                            </button>
                        </div>
                        {mensagemAviso.mensagem && (
                            <span className='mensagem-erro'>
                                {mensagemAviso.mensagem}
                            </span>
                        )}
                        <p className="texto-cadastro">
                            Não possui conta? <Link to="/register" className='link-registrar'>Registre-se</Link>

                        </p>



                    </form>
                </section>
            </main>



        </>

    )
}

export default Login