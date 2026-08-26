import { Router } from "express";
import { conexao } from '../config/database.js'

import { validarNome, validarEmail, validarSenha } from "../validacao/Validacao.js";





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

    try {

        await conexao.query(
            'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)',
            [nome, email, senha]
        )

        res.status(201).json({ mensagem: 'Cadastrado com sucesso!' })

    } catch (error) {


    }



})



export default router