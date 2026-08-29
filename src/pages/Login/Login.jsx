import { Link } from 'react-router-dom'
import { useState } from 'react'
import Header from '../../componentes/Header/Header'
import './Login.css'

import { ValidarEmail, ValidarSenha } from '../../utils/Validacao'
import { validarEmail, validarSenha } from '../../../backend/src/validacao/Validacao'



function Login() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [erro, setErro] = useState({
        email: '',
        senha: ''
    })
    const [mensagem, setMensagem] = useState('')



    async function validacao(e) {

        e.preventDefault()

        setErro('')

        /*valide a regex */


        

        



        try {

            const dadosInputs = {email: email, senha: senha}
            const mensagens = await Logar(dadosInputs)
            setMensagem(mensagens)

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
                        </div>




                        <div className='campo container-btn'>
                            <button type="submit" className="btn-login btn">
                                Entrar
                            </button>
                            <button type="button" className="btn-forgot btn">
                                <Link to="/esqueci-senha" className='link-esqueci-senha'>Esqueci minha senha</Link>
                            </button>
                        </div>
                        {erro && (
                            <span className='mensagem-erro'>
                                {erro}
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