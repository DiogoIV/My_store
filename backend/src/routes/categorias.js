/*Conecte ao banco e pegue os nomes dos icones */
import { Router } from "express";

const router = Router()

import conexao from '../config/database.js'

router.get('/', async (req,res) => {

   
   const [categorias] = await conexao.query(
        'SELECT * FROM categorias'
   );

   return res.status(200).json({categorias: categorias})

})

export default router


