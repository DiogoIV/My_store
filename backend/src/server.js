import 'dotenv/config';
import express from 'express';
import cors from 'cors';


import authRouter from './routes/auth.js'


const app = express()

app.use(express.json())
app.use(cors())

app.use('/auth', authRouter)


app.listen(process.env.PORT, ()=> console.log('Servidor Rodando na porta', process.env.PORT))




