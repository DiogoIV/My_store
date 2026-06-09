import { Link } from 'react-router-dom'
import Header from '../../componentes/Header/Header'
import './Register.css'
import handleSubmit from '../../utils/HandleSubmit'

function Register() {

    

    return (
        <>
            <Header modo="login" />
            
            <main className='container-principal'>

                <section className='container-register'>
                    
                <form action="" method="post" className='form-register' onSubmit={handleSubmit}>
                    
                    <h1 className='titulo-register'>Criar conta</h1>

                    <div className="campo">
                        <label htmlFor="usu">Nome</label>
                        <input type="text" id="usu" autoComplete="username" placeholder='Nome'/>
                    </div>

                    <div className="campo">
                        <label htmlFor="email">E-mail</label>
                        <input type="email" id="email" autoComplete="email" placeholder='Email'/>
                    </div>

                    <div className="campo">
                        <label htmlFor="senha">Senha</label>
                        <input type="password" id="senha" autoComplete="new-password"  placeholder='nova Senha'/>
                    </div>

                    <div className="campo">
                        <label htmlFor="confsenha">Confirmar Senha</label>
                        <input type="password" id="confsenha" autoComplete="new-password" placeholder='Confirmar senha'/>
                    </div>

                    <div className='container-btn'>
                        <button type="submit" className='btn'>Criar conta</button>
                    </div>

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