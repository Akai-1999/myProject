import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

mongoose.connect(
  'mongodb://localhost:27017/mydatabase',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log('connected my dataADMIN')
  }
)

const adminSchema = new mongoose.Schema({
  email: String,
  password: String,
})

const Admin = new mongoose.model('Admin', adminSchema)

const getAdmins = async () => {
  const result = await Admin.find().exec()
  return result
}

const createAdmin = async (email, password) => {
  const result = await Admin.create({
    email: email,
    password: password,
  })
  return result
}

const login = async (email, password) => {
  const admin = await Admin.findOne({ email: email })
  if (admin) {
    if (password == admin.password) {
      return {
        message: 'succes',
      }
    } else {
      return {
        message: 'password est incorrect',
      }
    }
  } else {
    return {
      message: 'email est incorrect',
    }
  }
}
export default {
  login,
  getAdmins,
  createAdmin,
}
