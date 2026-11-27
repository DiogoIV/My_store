
import { Router } from "express";

const router = Router()

import conexao from '../config/database.js'

router.get('/', async (req,res) => {
   
   
   const [categorias] = await conexao.query(
        'SELECT * FROM categoria'
   );

   
   return res.status(200).json({categoria: categorias})

})

export default router


