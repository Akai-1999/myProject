import cors from 'cors'
import mongoose from 'mongoose'
import express from 'express'

const app = express()

app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect(
  'mongodb://localhost:27017/mydatabase',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log('connected my data')
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

//router
app.post('/login', (req, res) => {
  const { cne, cin } = req.body
  Etudiant.findOne({ cne: cne }, (err, etudiant) => {
    if (etudiant) {
      if (cin === etudiant.cin) {
        res.send({ message: 'succes', etudiant: etudiant })
      } else {
        res.send({ message: 'cin incorrect' })
      }
    } else {
      res.send({ message: 'etudiant not registred' })
    }
  })
})
///

////
app.post('/creecompte', (req, res) => {
  const { nom, prenom, cne, cin, email, phone, filier } = req.body
  console.log({ nom, prenom, cne, cin, email, phone, filier })
  Etudiant.findOne({ cne: cne }, (err, etudiant) => {
    if (etudiant) {
      res.send({ message: 'etudiant deja enregistrer' })
    } else {
      const etudiant = new Etudiant({
        nom,
        prenom,
        cne,
        cin,
        email,
        phone,
        filier,
      })
      etudiant.save((err) => {
        if (err) {
          res.send(err)
        } else {
          res.send({ message: 'successfully' })
        }
      })
    }
  })
})

app.listen(7000, () => {
  console.log('be started at port 7000')
})
