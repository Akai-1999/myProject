import binomeModel from '../models/change_binome.js'
import { Router } from 'express'

const binom = Router()

binom.post('/changebinom', async (req, res) => {
  const result = await binomeModel.createReq(req.body)
  res.json(result)
})
binom.get('/changebinom', async (req, res) => {
  const result = await binomeModel.findAll()
  res.json(result)
})
binom.get('/binom/etudiant/:cne', async (req, res) => {
  const result = await binomeModel.findByCne(req.params.cne)
  res.json(result)
})
binom.delete('/changebinom/:id', async (req, res) => {
  const result = await binomeModel.findByIdAndDelete(req.params.id)
  res.json(result)
})
binom.get('/changebinom/:id', async (req, res) => {
  const result = await binomeModel.findById(req.params.id)
  res.json(result)
})
binom.put('/changebinom/:id', async (req, res) => {
  const result = await binomeModel.findByIdAndUpdate(req.params.id, req.body)
  res.json(result)
})
binom.put('/changebinom/:id/status', async (req, res) => {
  const result = await binomeModel.findByIdAndChangeStatus(
    req.params.id,
    req.body.status
  )
  res.json(result)
})

export default binom
