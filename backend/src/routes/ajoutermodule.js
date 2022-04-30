import ajouterModuleModel from '../models/ajoutermodule.js'
import { Router } from 'express'

const ajouterModule = Router()

ajouterModule.post('/ajouterModule', async (req, res) => {
  const result = await ajouterModuleModel.createReq(req.body)
  res.json(result)
})
ajouterModule.get('/ajouterModule', async (req, res) => {
  const result = await ajouterModuleModel.findAll()
  res.json(result)
})
ajouterModule.delete('/ajouterModule/:id', async (req, res) => {
  const result = await ajouterModuleModel.findByIdAndDelete(req.params.id)
  res.json(result)
})
ajouterModule.get('/ajouterModule/:id', async (req, res) => {
  const result = await ajouterModuleModel.findById(req.params.id)
  res.json(result)
})
ajouterModule.get('/ajouterModule/etudiant/:cne', async (req, res) => {
  const result = await ajouterModuleModel.findByCne(req.params.cne)
  res.json(result)
})
ajouterModule.put('/ajouterModule/:id', async (req, res) => {
  const result = await ajouterModuleModel.findByIdAndUpdate(
    req.params.id,
    req.body
  )
  res.json(result)
})
ajouterModule.put('/ajouterModule/:id/status', async (req, res) => {
  const result = await ajouterModuleModel.findByIdAndChangeStatus(
    req.params.id,
    req.body.status
  )
  res.json(result)
})

export default ajouterModule
