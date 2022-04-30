import mongoose from 'mongoose'

mongoose.connect(
  'mongodb://localhost:27017/mydatabase',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log('connected data Derogation')
  }
)

const derogationShema = new mongoose.Schema({
  cneEtudiant: String,
  annee: String,
  date: Date,
  status: String,
})

const derogation = new mongoose.model('derogation', derogationShema)

const createReq = async (obj) => {
  const req = await derogation.create({
    annee: obj.annee,
    cneEtudiant: obj.cneEtudiant,
    date: new Date(),
    status: 'en attente',
  })
  return req
}

const findAll = async () => {
  const result = await derogation.find()
  return result
}

const findById = async (id) => {
  const result = await derogation.findOne({ _id: id })
  return result
}

const findByIdAndDelete = async (id) => {
  derogation.deleteOne({ _id: id }, (err) => {
    console.error(err)
  })
  return await findAll()
}

const findByIdAndChangeStatus = async (id, status) => {
  const obj = await findById(id)
  obj.overwrite({
    annee: obj.annee,
    cneEtudiant: obj.cneEtudiant,
    date: obj.date,
    status: status,
  })
  return await obj.save()
}

const findByIdAndUpdate = async (id, obj) => {
  const obj2 = await findById(id)
  obj2.overwrite({
    annee: obj.annee,
    cneEtudiant: obj.cneEtudiant,
    date: obj.date,
    status: obj.status,
  })
  return await obj2.save()
}

const findByCne = async (cne) => {
  const result = await derogation.find({ cneEtudiant: cne })
  return result
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
