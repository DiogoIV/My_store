import { Router } from "express";
import { validarNome, validarEmail, validarSenha } from "../validacao/Validacao.js";


function validarFormatos (nome, email, senha) {

    return (
        validarNome(nome) ||
        validarEmail(email) ||
        validarSenha(senha)
    )

}

const BancodeDados = []

const router = Router()



router.post('/cadastro', (req, res ) => {

    const {nome, email, senha, confirmarSenha} = req.body

    if(nome === '' || email === '' || senha === ''||confirmarSenha === '') {
        return res.status(400).json({mensagem: 'campos obrigatórios'})
    }

    const erroFormato = validarFormatos(nome, email, senha)

    if(senha !== confirmarSenha) {
        return res.status(400).json({mensagem: 'Senhas não coincidem'})
    }
    
    if(erroFormato) {
        return res.status(400).json({mensagem: erroFormato})

    }

    BancodeDados.push({
        nome: nome,
        email: email,
        senha: senha
    })

    res.status(201).json({mensagem: 'Cadastrado com sucesso!'})

})



export default router