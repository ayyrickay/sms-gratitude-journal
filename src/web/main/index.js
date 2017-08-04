import bodyParser from 'body-parser'
import db from '../../db'
import express from 'express'

const router = express.Router()

router.use(bodyParser.json())

const createUser = (user) => {
  const usersCollection = db.get().collection('users')
  usersCollection.update(user, user, {upsert:true})
}

const parsePhone = (phone) => {
  const cleanPhone = phone.replace(/[^\d]/g, "")
  if (cleanPhone.length === 10) {
    return `+1${cleanPhone}`
  } else {
    return null
  }
}

const parseRequest = (req) => {
  const name = req.name
  const email = req.email
  const phone = parsePhone(req.phone)

  return {name, email, phone}
}

router.post('/', (req, res) => {
  const user = parseRequest(req.body)
  if (user.phone) {
    createUser(user)
    res.json({error: null})
  } else {
    res.json({error: "Invalid phone number"})
  }

})

module.exports = router
