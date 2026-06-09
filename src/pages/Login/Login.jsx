import { Link } from 'react-router-dom'
import Header from '../../componentes/Header/Header'
import './Login.css'

import handleSubmit from '../../utils/HandleSubmit'

function Login() {

    
    return (
        <>
            <Header modo="login" />

            <main className="container_principal">

                <section className="container-login">

                    <form className="form-login" onSubmit={handleSubmit}>

                        <h1 className='titulo-login'>Login</h1>
                        
                        <div className="campo">
                            <label htmlFor="email">E-mail</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Digite seu e-mail" autoComplete='email'
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
                        
                        <div className='campo container-btn'>
                            <button type="submit" className="btn-login btn">
                                Entrar
                            </button>
                            <button type="button" className="btn-forgot btn">
                                <Link to="/esqueci-senha" className='link-esqueci-senha'>Esqueci minha senha</Link>
                            </button>
                        </div>
        
                        <p className="texto-cadastro">
                            Não possui conta? <Link to="/register" className='link-registrar'>Registre-se</Link>

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