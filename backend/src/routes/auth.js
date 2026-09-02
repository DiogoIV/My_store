import { Router } from "express";
import bcrypt from 'bcrypt'
import conexao from '../config/database.js'

import { validarNome, validarEmail, validarSenha } from "../validacao/Validacao.js";





function validarFormatos(nome, email, senha) {

    return (
        validarNome(nome) ||
        validarEmail(email) ||
        validarSenha(senha)
    )

}


const router = Router()


/*Rota cadastro*/

router.post('/cadastro', async (req, res) => {

    const { nome, email, senha, confirmarSenha } = req.body

    /*Validações*/

    if (nome === '' || email === '' || senha === '' || confirmarSenha === '') {

        return res.status(400).json({
            campo: 'erro',
            mensagem: ' ⚠ preenchas os campos corretamente!!!'
        })
    }


    if (senha !== confirmarSenha) {
        return res.status(400).json({
            campo: 'erro',
            mensagem: ' ⚠ Senhas não coincidem'
        })
    }


    const erroFormato = validarFormatos(nome, email, senha)


    if (erroFormato) {

        return res.status(400).json({
            campo: 'erro',
            mensagem: erroFormato
        })

    }


    /* Conexão com o Banco de Dados */

    const partesNome = nome.split(' ')

    const primeiroNome = partesNome[0]

    const sobrenome = partesNome.slice(1).join(' ')

    const senhaHash = await bcrypt.hash(senha, 10)

    try {

        await conexao.query(

            'INSERT INTO usuarios (nome, sobrenome, email, senha) VALUES (?, ?, ?, ?)',
            [primeiroNome, sobrenome, email, senhaHash]

        )

        res.status(201).json({
            campo: 'sucesso',
            mensagem: 'Cadastrado com sucesso!'
        })

    } catch (error) {

        if (error.errno === 1062) {
            return res.status(409).json({
                campo: 'email',
                mensagem: ' ⚠ Este email já está cadastrado'
            })
        }

        console.error('Erro de conexão ao Banco de dados', error)

        res.status(500).json({
            campo: 'erro',
            mensagem: ' ⚠ Erro interno do servidor'
        })



    }



})

/*Rota Login*/

router.post('/login', async (req, res) => {

    const { email, senha } = req.body

    /*Validações*/

    const erroEmail = validarEmail(email)

    if (email === '' || senha === '') {
        return res.status(400).json({ mensagem: 'Email ou senha inválido' })
    }

    if (erroEmail) {
        return res.status(400).json({ mensagem: erroEmail })
    }



    const [resultado] = await conexao.query(
        'SELECT * FROM usuarios WHERE email = ?',
        [email]
    )

    if (resultado.length === 0) {

        return res.status(401).json({
            campo: 'login',
            mensagem: 'E-mail ou senha inválidos'
        })

    }

    const senhaCorreta = await bcrypt.compare(senha, resultado[0].senha)

    if(!senhaCorreta) {

        return res.status(401).json({mensagem: 'senha errada'})

    }

    return res.status(200).json({mensagem: 'Logado com sucesso!'})


})


/*aplique o jwt. depois crie o container, após o usuário fazer login.*/


export default router