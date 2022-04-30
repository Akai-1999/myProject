import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

mongoose.connect(
  'mongodb://localhost:27017/mydatabase',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log('connected data Etudiant')
  }
)

const etudiantSchema = new mongoose.Schema({
  nom: String,
  prenom: String,
  cne: String,
  cin: String,
  email: String,
  phone: String,
  filier: String,
})

const Etudiant = new mongoose.model('Etudiant', etudiantSchema)

const findAll = async () => {
  const result = await Etudiant.find()
  return result
}

const findByCne = async (cne) => {
  const result = await Etudiant.findOne({ cne: cne }).exec()
  return result
}

const creecompte = async (nom, prenom, cne, cin, email, phone, filier) => {
  let etudiantExist = await findByCne(cne)
  if (!etudiantExist) {
    etudiantExist = await Etudiant.create(
      {
        nom: nom,
        prenom: prenom,
        cne: cne,
        cin: cin,
        email: email,
        phone: phone,
        filier: filier,
      },
      (err, etudiant) => {
        console.log(etudiant)
        // etudiantExist = etudiant
      }
    )
  }
  return etudiantExist
}

const login = async (cne, cin) => {
  const etudiant = await findByCne(cne)
  if (etudiant) {
    if (cin == etudiant.cin) {
      return {
        message: 'succes',
      }
    } else {
      return {
        message: 'cin est incorrect',
      }
    }
  } else {
    return {
      message: 'cne est incorrect',
    }
  }
}

const findByCneAndDelete = async (cne) => {
  Etudiant.deleteOne({ cne: cne }, (err) => {
    console.error(err)
  })
  return await findAll()
}
const findByCneAndUpdate = async (
  nom,
  prenom,
  cne,
  cin,
  email,
  phone,
  filier
) => {
  const etudiant = await findByCne(cne)
  etudiant.overwrite({
    nom: nom,
    prenom: prenom,
    cin: cin,
    email: email,
    phone: phone,
    filier: filier,
    cne: cne,
  })
  return await etudiant.save()
}

export default {
  creecompte,
  login,
  findAll,
  findByCne,
  findByCneAndDelete,
  findByCneAndUpdate,
}
