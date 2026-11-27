import { Router } from "express";

const router = Router();

import conexao from "../config/database";

router.get('/', async (req, res)=> {


    try {

        const [produtos] = await conexao.query(    
            'SELECT id, nome, descricao, imagem, preco  FROM produtos'
        )

    } catch (error) {

        console.log('Erro ao estabelecer conexão com Banco de Dados')
    }    

})

export default router