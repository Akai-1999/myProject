import mongoose from 'mongoose'

mongoose.connect(
  'mongodb://localhost:27017/mydatabase',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log('connected my dataBinome')
  }
)

const findByCne = async (cne) => {
  const result = await ChangeBinome.find({ cneEtudiant: cne })
  return result
}
const binomSchema = new mongoose.Schema({
  nomBinom: String,
  prenomBinom: String,
  cneBinome: String,
  cneEtudiant: String,
  date: Date,
  status: String,
})

const ChangeBinome = new mongoose.model('ChangeBinome', binomSchema)

const createReq = async (obj) => {
  const req = await ChangeBinome.create({
    nomBinom: obj.nomBinom,
    prenomBinom: obj.prenomBinom,
    cneBinome: obj.cneBinome,
    cneEtudiant: obj.cneEtudiant,
    date: new Date(),
    status: 'en attente',
  })
  return req
}

const findAll = async () => {
  const result = await ChangeBinome.find()
  return result
}

const findById = async (id) => {
  const result = await ChangeBinome.findOne({ _id: id })
  return result
}

const findByIdAndDelete = async (id) => {
  ChangeBinome.deleteOne({ _id: id }, (err) => {
    console.error(err)
  })
  return await findAll()
}

const findByIdAndChangeStatus = async (id, status) => {
  const obj = await findById(id)
  obj.overwrite({
    nomBinom: obj.nomBinom,
    prenomBinom: obj.prenomBinom,
    cneBinome: obj.cneBinome,
    cneEtudiant: obj.cneEtudiant,
    date: obj.date,
    status: status,
  })
  return await obj.save()
}

const findByIdAndUpdate = async (id, obj) => {
  const obj2 = await findById(id)
  obj2.overwrite({
    nomBinom: obj.nomBinom,
    prenomBinom: obj.prenomBinom,
    cneBinome: obj.cneBinome,
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
