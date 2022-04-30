import droitPfeModel from '../models/demandedroit_de_pfe.js'
import { Router } from 'express'

const droitPfe = Router()

droitPfe.post('/droitPfe', async (req, res) => {
  const result = await droitPfeModel.createReq(req.body)
  res.json(result)
})
droitPfe.get('/droitPfe', async (req, res) => {
  const result = await droitPfeModel.findAll()
  res.json(result)
})
droitPfe.get('/droitPfe/etudiant/:cne', async (req, res) => {
  const result = await droitPfeModel.findByCne(req.params.cne)
  res.json(result)
})
droitPfe.delete('/droitPfe/:id', async (req, res) => {
  const result = await droitPfeModel.findByIdAndDelete(req.params.id)
  res.json(result)
})
droitPfe.get('/droitPfe/:id', async (req, res) => {
  const result = await droitPfeModel.findById(req.params.id)
  res.json(result)
})
droitPfe.put('/droitPfe/:id', async (req, res) => {
  const result = await droitPfeModel.findByIdAndUpdate(req.params.id, req.body)
  res.json(result)
})
droitPfe.put('/droitPfe/:id/status', async (req, res) => {
  const result = await droitPfeModel.findByIdAndChangeStatus(
    req.params.id,
    req.body.status
  )
  res.json(result)
})

export default droitPfe
