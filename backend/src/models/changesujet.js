import mongoose from 'mongoose'

mongoose.connect(
  'mongodb://localhost:27017/mydatabase',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log('connected data changeSujet')
  }
)

const changeSujetSchema = new mongoose.Schema({
  textarea: String,
  cneEtudiant: String,
  date: Date,
  status: String,
})

const changeSujet = new mongoose.model('changeSujet', changeSujetSchema)

const createReq = async (obj) => {
  const req = await changeSujet.create({
    textarea: obj.textarea,
    cneEtudiant: obj.cneEtudiant,
    date: new Date(),
    status: 'en attente',
  })
  return req
}
const findByCne = async (cne) => {
  const result = await changeSujet.find({ cneEtudiant: cne })
  return result
}

const findAll = async () => {
  const result = await changeSujet.find()
  return result
}

const findById = async (id) => {
  const result = await changeSujet.findOne({ _id: id })
  return result
}

const findByIdAndDelete = async (id) => {
  changeSujet.deleteOne({ _id: id }, (err) => {
    console.error(err)
  })
  return await findAll()
}

const findByIdAndChangeStatus = async (id, status) => {
  const obj = await findById(id)
  obj.overwrite({
    textarea: obj.textarea,
    cneEtudiant: obj.cneEtudiant,
    date: obj.date,
    status: status,
  })
  return await obj.save()
}

const findByIdAndUpdate = async (id, obj) => {
  const obj2 = await findById(id)
  obj2.overwrite({
    textarea: obj.textarea,
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
