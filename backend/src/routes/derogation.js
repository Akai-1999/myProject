import DerogationModel from '../models/Derogation.js'
import { Router } from 'express'

const Derogation = Router()

Derogation.post('/Derogation', async (req, res) => {
  const result = await DerogationModel.createReq(req.body)
  res.json(result)
})
Derogation.get('/Derogation', async (req, res) => {
  const result = await DerogationModel.findAll()
  res.json(result)
})
Derogation.delete('/Derogation/:id', async (req, res) => {
  const result = await DerogationModel.findByIdAndDelete(req.params.id)
  res.json(result)
})
Derogation.get('/Derogation/etudiant/:cne', async (req, res) => {
  const result = await DerogationModel.findByCne(req.params.cne)
  res.json(result)
})
Derogation.get('/Derogation/:id', async (req, res) => {
  const result = await DerogationModel.findById(req.params.id)
  res.json(result)
})
Derogation.put('/Derogation/:id', async (req, res) => {
  const result = await DerogationModel.findByIdAndUpdate(
    req.params.id,
    req.body
  )
  res.json(result)
})
Derogation.put('/Derogation/:id/status', async (req, res) => {
  const result = await DerogationModel.findByIdAndChangeStatus(
    req.params.id,
    req.body.status
  )
  res.json(result)
})

export default Derogation
