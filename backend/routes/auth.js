import { Router } from "express";


const BancodeDados = []

const router = Router()


router.post('cadastro', (req, res ) => {
    const {nome, email, senha, confirmarSenha} = req.body
})



export default router