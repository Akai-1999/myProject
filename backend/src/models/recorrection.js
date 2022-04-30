import mongoose from 'mongoose'
// import recorrection from '../routes/recorrection'

mongoose.connect(
  'mongodb://localhost:27017/mydatabase',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log('connected my data recorrection')
  }
)

const recorrectionShema = new mongoose.Schema({
  nomModule: String,
  cneEtudiant: String,
  date: Date,
  status: String,
})

const Recorrection = new mongoose.model('recorrection', recorrectionShema)

const createReq = async (obj) => {
  const req = await Recorrection.create({
    nomModule: obj.nomModule,
    cneEtudiant: obj.cneEtudiant,
    date: new Date(),
    status: 'en attente',
  })
  return req
}

const findAll = async () => {
  const result = await Recorrection.find()
  return result
}

const findById = async (id) => {
  const result = await Recorrection.findOne({ _id: id })
  return result
}

const findByIdAndDelete = async (id) => {
  Recorrection.deleteOne({ _id: id }, (err) => {
    console.error(err)
  })
  return await findAll()
}

const findByIdAndChangeStatus = async (id, status) => {
  const obj = await findById(id)
  obj.overwrite({
    nomModule: obj.nomModule,
    cneEtudiant: obj.cneEtudiant,
    date: obj.date,
    status: status,
  })
  return await obj.save()
}

const findByIdAndUpdate = async (id, obj) => {
  const obj2 = await findById(id)
  obj2.overwrite({
    nomModule: obj.nomModule,
    cneEtudiant: obj.cneEtudiant,
    date: obj.date,
    status: obj.status,
  })
  return await obj2.save()
}

const findByCne = async (cne) => {
  const result = await Recorrection.find({ cneEtudiant: cne })
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
