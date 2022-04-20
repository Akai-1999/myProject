import etudiantModel from '../models/etudiant.js'
import { Router } from 'express'

const etudiant = Router()

etudiant.post('/login', async (req, res) => {
  const result = await etudiantModel.login(req.body.cne, req.body.cin)
  res.json(result)
})

etudiant.get('/etudiant', async (req, res) => {
  const result = await etudiantModel.findAll()
  res.json(result)
})
etudiant.get('/etudiant/:cne', async (req, res) => {
  const result = await etudiantModel.findByCne(req.params.cne)
  res.json(result)
})
etudiant.post('/etudiant', async (req, res) => {
  const result = await etudiantModel.creecompte(
    req.body.nom,
    req.body.prenom,
    req.body.cne,
    req.body.cin,
    req.body.email,
    req.body.phone,
    req.body.filier
  )
  res.json(result)
})
etudiant.delete('/etudiant/:cne', async (req, res) => {
  const result = await etudiantModel.findByCneAndDelete(req.params.cne)
  res.json(result)
})
etudiant.put('/etudiant/:cne', async (req, res) => {
  const result = await etudiantModel.findByCneAndUpdate(
    req.body.nom,
    req.body.prenom,
    req.params.cne,
    req.body.cin,
    req.body.email,
    req.body.phone,
    req.body.filier
  )
  res.json(result)
})

export default etudiant
