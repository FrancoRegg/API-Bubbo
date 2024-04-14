import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { router } from './routes'  
import db from "./config/mongo"
import  bodyParser  from 'body-parser'


const PORT = process.env.PORT || 3001;
const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(router)

db().then(() => console.log("Conectado a la Base de Datos"))
app.listen(PORT, () => console.log(`El servidor está escuchando en el puerto ${PORT}`))