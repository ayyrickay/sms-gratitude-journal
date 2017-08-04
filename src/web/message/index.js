import bodyParser from 'body-parser'
import db from '../../db'
import express from 'express'

const router = express.Router()

const urlEncodedParser = bodyParser.urlencoded({extended: false})

const insertEntry = (entry) => {
  const entries = db.get().collection('entries')
  entries.insert(entry)
}

const parseRequest = (req) => {
  const text = req.body.split(';')
  const date = new Date()
  const phone = req.from

  return {text, date, phone}
}

router.post('/', urlEncodedParser, (req, res) => {
  insertEntry(parseRequest(req.body))

  res.send('<Response><Message>Response recorded!</Message></Response>')
})

module.exports = router
