import { useState } from 'react'

import Header from '../../componentes/Header/Header'
import './EsqueciSenha.css'

import { validarEsqueciSenha } from '../../utils/Validacao'

function EsqueciSenha() {
    const [email, setEmail] = useState('')
    const [erro, setErro] = useState('')


    function validacao (e) {
        e.preventDefault()

        const erroEsqueci = validarEsqueciSenha(email)

        if(erroEsqueci) {
            setErro(erroEsqueci)
        }
    }

    return (
    
        <>
            <Header modo="login" />

            <main className='container-principal'>

                <section className='container-esqueci-senha'>

                    <form action="" method="post" className='form-esqueci-senha' onSubmit={validacao}>
                            
                            <h1 className='titulo-esqueci-senha'>Redefinir a Senha</h1>
                            

                            <div className='campo'>
                                <label htmlFor="email">Email</label>
                                <input type="email" name="" id="email" placeholder='DIgite seu e-mail'
                                value={email}
                                onChange={(e)=> setEmail(e.target.value)}
                                />
                            </div>

                                
                            <div className='container-btn'>
                                <button type="submit" className='btn'>Enviar código</button>
                            </div>
                        
                            {erro && (
                                <span className='mensagem-erro'>
                                    {erro}
                                </span>
                            )}
                    </form>
                </section>
            </main>
        </>
    )
}

export default EsqueciSenha