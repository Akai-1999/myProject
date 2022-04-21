import express from 'express'
import { config } from 'dotenv'
import etudiant from './src/routes/etudiant.js'
import cors from 'cors'
import admin from './src/routes/admin.js'

config()

const app = express()

app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
app.use('/', etudiant)
app.use('/', admin)
app.listen(3080)
