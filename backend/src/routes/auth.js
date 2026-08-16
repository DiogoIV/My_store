import { Router } from "express";




const BancodeDados = []

const router = Router()


router.post('cadastro', (req, res ) => {

    const {nome, email, senha, confirmarSenha} = req.body
    
    if(nome === '' || email === '' || senha === ''||confirmarSenha === '') {
        return res.status(400).json({mensagem: 'campos obrigatórios'})
    }




})



export default router