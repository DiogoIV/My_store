import { Link } from 'react-router-dom'
import { useState } from 'react'
import Header from '../../componentes/Header/Header'

import './Register.css'

import { validarRegistro} from '../../utils/Validacao'

import Cadastro from '../../api/auth'

function Register() {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const errosRegister = {
        nome: '',
        email: '',
        senha: '',
        confirmarSenha: '',
        validarSenha: ''

    }
    const [erro, setErro] = useState(errosRegister)

    const [mensagem, setMesagem] = useState('')
    const [tipo, setTipo] = useState('')

    console.log('minha mensagem', mensagem)

    const [confirmarSenha, setConfirmarSenha] = useState('')




    async function validacao(e) {

        e.preventDefault()

        setErro(errosRegister)
        setMesagem('')
        setTipo('')

        const erros = validarRegistro(nome, email, senha, confirmarSenha)

        if (erros.nome || erros.email|| erros.senha|| erros.confirmarSenha) {
            
            setErro(

                ({
                    ...erro,
                    nome: erros.nome,
                    email: erros.email,
                    senha: erros.senha,
                    confirmarSenha: erros.confirmarSenha,
                    validarSenha: erros.validarSenha

                }))

            return
        }

       

        const dadosRegister = {
            nome: nome,
            email: email,
            senha: senha,
            confirmarSenha: confirmarSenha
        }

        const resultado = await Cadastro(dadosRegister)

        console.log('RESULTADO:', resultado)
        
        setMesagem(resultado.mensagem)
        setTipo(resultado.tipo)



    }


    return (
        <>
            <Header modo="login" />

            <main className='container-principal'>

                <section className='container-register' >

                    <form action=""  className='form-register' onSubmit={validacao}>

                        <h1 className='titulo-register'>Criar conta</h1>

                        <div className="campo">

                            <label htmlFor="usu">Nome</label>

                            <input type="text" id="usu" autoComplete="name" placeholder='Nome'
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                            />

                            {erro.nome && <span className='aviso-erro'>{erro.nome}</span>}

                        </div>

                        <div className="campo">
                            <label htmlFor="email">E-mail</label>
                            <input type="email" id="email" autoComplete="email" placeholder='Email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {erro.email && <span className='aviso-erro'>{erro.email}</span>}
                        </div>

                        <div className="campo">
                            <label htmlFor="senha">Senha</label>
                            <input type="password" id="senha" autoComplete="new-password" placeholder='Nova senha'
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                            />

                            {erro.senha && <span className='aviso-erro'>{erro.senha}</span>}

                        </div>

                        <div className="campo">
                            <label htmlFor="confsenha">Confirmar Senha</label>
                            <input type="password" id="confsenha" autoComplete="new-password" placeholder='Confirmar senha'
                                value={confirmarSenha}
                                onChange={(e) => setConfirmarSenha(e.target.value)}
                            />

                            {erro.confirmarSenha && <span className='aviso-erro'>{erro.confirmarSenha}</span>}

                            {erro.validarSenha && <span className='aviso-erro'>{erro.validarSenha}</span>}

                        </div>

                        <div className='container-btn'>
                            <button className='btn'>Criar conta</button>
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