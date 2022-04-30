import recorrectionModel from '../models/recorrection.js'
import { Router } from 'express'

const recorrection = Router()

recorrection.post('/recorrection', async (req, res) => {
  const result = await recorrectionModel.createReq(req.body)
  res.json(result)
})
recorrection.get('/recorrection', async (req, res) => {
  const result = await recorrectionModel.findAll()
  res.json(result)
})
recorrection.delete('/recorrection/:id', async (req, res) => {
  const result = await recorrectionModel.findByIdAndDelete(req.params.id)
  res.json(result)
})
recorrection.get('/recorrection/:id', async (req, res) => {
  const result = await recorrectionModel.findById(req.params.id)
  res.json(result)
})
recorrection.put('/recorrection/:id', async (req, res) => {
  const result = await recorrectionModel.findByIdAndUpdate(
    req.params.id,
    req.body
  )
  res.json(result)
})
recorrection.get('/recorrection/etudiant/:cne', async (req, res) => {
  const result = await recorrectionModel.findByCne(req.params.cne)
  res.json(result)
})
recorrection.put('/recorrection/:id/status', async (req, res) => {
  const result = await recorrectionModel.findByIdAndChangeStatus(
    req.params.id,
    req.body.status
  )
  res.json(result)
})

export default recorrection
