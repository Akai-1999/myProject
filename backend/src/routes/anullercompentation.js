import compentationModel from '../models/anullercompentation.js'
import { Router } from 'express'

const compentation = Router()

compentation.post('/compentation', async (req, res) => {
  const result = await compentationModel.createReq(req.body)
  res.json(result)
})
compentation.get('/compentation', async (req, res) => {
  const result = await compentationModel.findAll()
  res.json(result)
})
compentation.delete('/compentation/:id', async (req, res) => {
  const result = await compentationModel.findByIdAndDelete(req.params.id)
  res.json(result)
})
compentation.get('/compentation/:id', async (req, res) => {
  const result = await compentationModel.findById(req.params.id)
  res.json(result)
})
compentation.get('/compentation/etudiant/:cne', async (req, res) => {
  const result = await compentationModel.findByCne(req.params.cne)
  res.json(result)
})
compentation.put('/compentation/:id', async (req, res) => {
  const result = await compentationModel.findByIdAndUpdate(
    req.params.id,
    req.body
  )
  res.json(result)
})
compentation.put('/compentation/:id/status', async (req, res) => {
  const result = await compentationModel.findByIdAndChangeStatus(
    req.params.id,
    req.body.status
  )
  res.json(result)
})

export default compentation
