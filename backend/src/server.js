import 'dotenv/config';
import express from 'express';
import cors from 'cors';


import authRouter from './routes/auth.js'
import categoriasRouter from './routes/categorias.js'


const app = express()

app.use(express.json())
app.use(cors())

app.use('/auth', authRouter)
app.use('/categorias', categoriasRouter)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Servidor Rodando na porta', PORT);
});




