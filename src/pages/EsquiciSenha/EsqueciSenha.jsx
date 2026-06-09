import Header from '../../componentes/Header/Header'
import './EsqueciSenha.css'
import handleSubmit from '../../utils/HandleSubmit'


function EsqueciSenha() {
    return (
        <>
            <Header modo="login" />

            <main className='container-principal'>

                <section className='container-esqueci-senha'>

                    <form action="" method="post" className='form-esqueci-senha' onSubmit={handleSubmit}>
                            
                            <h1 className='titulo-esqueci-senha'>Redefinir a Senha</h1>
                            

                            <div className='campo'>
                                <label htmlFor="email">Email</label>
                                <input type="email" name="" id="email" placeholder='DIgite seu e-mail'/>
                            </div>
                                
                            <div className='container-btn'>
                                <button type="submit" className='btn'>Enviar código</button>
                            </div>
                        
                    </form>
                </section>
            </main>
        </>
    )
}

export default EsqueciSenha