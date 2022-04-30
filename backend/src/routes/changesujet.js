import changeSujetModel from '../models/changesujet.js'
import { Router } from 'express'

const changeSujet = Router()

changeSujet.post('/changeSujet', async (req, res) => {
  const result = await changeSujetModel.createReq(req.body)
  res.json(result)
})
changeSujet.get('/changeSujet', async (req, res) => {
  const result = await changeSujetModel.findAll()
  res.json(result)
})
changeSujet.delete('/changeSujet/:id', async (req, res) => {
  const result = await changeSujetModel.findByIdAndDelete(req.params.id)
  res.json(result)
})
changeSujet.get('/changeSujet/:id', async (req, res) => {
  const result = await changeSujetModel.findById(req.params.id)
  res.json(result)
})
changeSujet.put('/changeSujet/:id', async (req, res) => {
  const result = await changeSujetModel.findByIdAndUpdate(
    req.params.id,
    req.body
  )
  res.json(result)
})
changeSujet.get('/changeSujet/etudiant/:cne', async (req, res) => {
  const result = await changeSujetModel.findByCne(req.params.cne)
  res.json(result)
})

changeSujet.put('/changeSujet/:id/status', async (req, res) => {
  const result = await changeSujetModel.findByIdAndChangeStatus(
    req.params.id,
    req.body.status
  )
  res.json(result)
})

export default changeSujet
