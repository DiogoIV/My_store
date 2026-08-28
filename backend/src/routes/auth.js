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

    const senhaHash = await bcrypt.hash(senha, 10)

    try {

        await conexao.query(

            'INSERT INTO usuarios (nome, sobrenome, email, senha) VALUES (?, ?, ?, ?)',
            [primeiroNome, sobrenome, email, senhaHash]

        )

        res.status(201).json({ mensagem: 'Cadastrado com sucesso!' })

    } catch (error) {

        if (error.errno === 1062) {
            return res.status(409).json({
                mensagem: 'Este email já está cadastrado'
            })
        }

        console.error('Erro de conexão ao Banco de dados', error)
        
        res.status(500).json({
            mensagem: 'Erro interno do servidor'
        })

        

    }



})

/*Rota Login*/





export default router