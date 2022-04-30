import express from 'express'
import { config } from 'dotenv'
import etudiant from './src/routes/etudiant.js'
import cors from 'cors'
import admin from './src/routes/admin.js'
import binom from './src/routes/change_binome.js'
import ajouterModule from './src/routes/ajoutermodule.js'
import compentation from './src/routes/anullercompentation.js'
import changeSujet from './src/routes/changesujet.js'
import droitPfe from './src/routes/demandedroit_de_pfe.js'
import Derogation from './src/routes/derogation.js'
import recorrection from './src/routes/recorrection.js'

config()

const app = express()

app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
app.use('/', etudiant)
app.use('/', admin)
app.use('/', binom)
app.use('/', ajouterModule)
app.use('/', compentation)
app.use('/', changeSujet)
app.use('/', droitPfe)
app.use('/', Derogation)
app.use('/', recorrection)
app.listen(3080)
