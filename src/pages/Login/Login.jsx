import { Link } from 'react-router-dom'
import Header from '../../componentes/Header/Header'
import './Login.css'

function Login() {

    function handleSubmit (event) {
        event.preventDefault()
    }
    return (
        <>
            <Header modo="login" />

            <main className="container_principal">

                <section className="container-login">

                    <form className="form-login" onSubmit={handleSubmit}>

                        <h1 className='titulo-login'>Faça Login</h1>

                        <div className="campo">
                            <label htmlFor="email">E-mail</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Digite seu e-mail"
                            />
                        </div>

                        <div className="campo">
                            <label htmlFor="senha">Senha</label>
                            <input
                                type="password"
                                id="senha"
                                placeholder="Digite sua senha"
                            />
                        </div>

                        <button type="submit" className="btn-login">
                            Entrar
                        </button>

                        <button type="button" className="btn-forgot">
                            Esqueci minha senha
                        </button>

                        <p className="texto-cadastro">
                            Não possui conta? <Link to="/esqueci-senha" className='link-registrar'>Registre-se</Link>

                        </p>

                        

                    </form>
                </section>
            </main>

            <footer>

            </footer>

        </>

    )
}

export default Login