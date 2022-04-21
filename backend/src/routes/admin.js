import adminModel from '../models/admin.js'
import { Router } from 'express'

const admin = Router()

admin.post('/admin/login', async (req, res) => {
  const result = await adminModel.login(req.body.email, req.body.password)
  res.json(result)
})
admin.get('/admin', async (req, res) => {
  const result = await adminModel.getAdmins()
  res.json(result)
})
admin.post('/admin', async (req, res) => {
  const result = await adminModel.createAdmin(req.body.email, req.body.password)
  res.json(result)
})

export default admin
