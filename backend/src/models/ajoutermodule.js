import mongoose from 'mongoose'

mongoose.connect(
  'mongodb://localhost:27017/mydatabase',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log('connected my dataAjouteModule')
  }
)

const ajoutemodulSchema = new mongoose.Schema({
  nomModule: String,
  cneEtudiant: String,
  date: Date,
  status: String,
})

const ajouterModule = new mongoose.model('ajouterModule', ajoutemodulSchema)

const createReq = async (obj) => {
  const req = await ajouterModule.create({
    nomModule: obj.nomModule,
    cneEtudiant: obj.cneEtudiant,
    date: new Date(),
    status: 'en attente',
  })
  return req
}

const findAll = async () => {
  const result = await ajouterModule.find()
  return result
}

const findById = async (id) => {
  const result = await ajouterModule.findOne({ _id: id })
  return result
}
const findByCne = async (cne) => {
  const result = await ajouterModule.find({ cneEtudiant: cne })
  return result
}
const findByIdAndDelete = async (id) => {
  ajouterModule.deleteOne({ _id: id }, (err) => {
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

export default {
  createReq,
  findAll,
  findByIdAndDelete,
  findById,
  findByIdAndChangeStatus,
  findByIdAndUpdate,
  findByCne,
}
