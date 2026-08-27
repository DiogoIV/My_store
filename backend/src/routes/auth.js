import { Router } from "express";
import conexao from '../config/database.js'

import { validarNome, validarEmail, validarSenha } from "../validacao/Validacao.js";

/*mude a Regex nome */



function validarFormatos(nome, email, senha) {

    return (
        validarNome(nome) ||
        validarEmail(email) ||
        validarSenha(senha)
    )

}


const router = Router()



router.post('/cadastro', async (req, res) => {

    const { nome, email, senha, confirmarSenha } = req.body

    /*Validações*/

    if (nome === '' || email === '' || senha === '' || confirmarSenha === '') {
        return res.status(400).json({ mensagem: 'campos obrigatórios' })
    }


    if (senha !== confirmarSenha) {
        return res.status(400).json({ mensagem: 'Senhas não coincidem' })
    }


    const erroFormato = validarFormatos(nome, email, senha)


    if (erroFormato) {

        return res.status(400).json({ mensagem: erroFormato })

    }


    /* Conexão com o Banco de Dados */

    const partesNome = nome.split(' ')

    const primeiroNome = partesNome[0]

    const sobrenome = partesNome.slice(1).join(' ')

    try {

        await conexao.query(
            'INSERT INTO usuarios (nome, sobrenome, email, senha) VALUES (?, ?, ?, ?)',
            [primeiroNome, sobrenome, email, senha]
        )

        res.status(201).json({ mensagem: 'Cadastrado com sucesso!' })

    } catch (error) {

        if (error.errno === 1062) {
            return res.status(409).json({
                mensagem: 'Este email já está cadastrado'
            })
        }
        res.status(500).json({
            mensagem: 'Erro interno do servidor'
        })

        console.error('Erro de conexão ao Banco de dados', error)

    }



})



export default router