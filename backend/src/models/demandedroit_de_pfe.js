import mongoose from 'mongoose'

mongoose.connect(
  'mongodb://localhost:27017/mydatabase',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log('connected my data droitPfe')
  }
)

const droitPfeShema = new mongoose.Schema({
  cneEtudiant: String,
  date: Date,
  status: String,
})
const findByCne = async (cne) => {
  const result = await droitPfe.find({ cneEtudiant: cne })
  return result
}

const droitPfe = new mongoose.model('droitPfe', droitPfeShema)

const createReq = async (obj) => {
  const req = await droitPfe.create({
    cneEtudiant: obj.cneEtudiant,
    date: new Date(),
    status: 'en attente',
  })
  return req
}

const findAll = async () => {
  const result = await droitPfe.find()
  return result
}

const findById = async (id) => {
  const result = await droitPfe.findOne({ _id: id })
  return result
}

const findByIdAndDelete = async (id) => {
  droitPfe.deleteOne({ _id: id }, (err) => {
    console.error(err)
  })
  return await findAll()
}

const findByIdAndChangeStatus = async (id, status) => {
  const obj = await findById(id)
  obj.overwrite({
    cneEtudiant: obj.cneEtudiant,
    date: obj.date,
    status: status,
  })
  return await obj.save()
}

const findByIdAndUpdate = async (id, obj) => {
  const obj2 = await findById(id)
  obj2.overwrite({
    cneEtudiant: obj.cneEtudiant,
    date: obj.date,
    status: obj.status,
  })
  return await obj2.save()
}

export default {
  createReq,
  findAll,
  findByIdAndDelete,
  findById,
  findByIdAndChangeStatus,
  findByIdAndUpdate,
  findByCne,
}
