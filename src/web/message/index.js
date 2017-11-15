import bodyParser from 'body-parser'
import db from '../../db'
import express from 'express'
import twilio from 'twilio'

const router = express.Router()

const urlEncodedParser = bodyParser.urlencoded({extended: false})

const insertEntry = (entry) => {
  console.log('inserting journal entry')
  const entries = db.get().collection('entries')
  entries.insert(entry)
}

const parseRequest = (req) => {
  const text = req.Body.split(';')
  const date = new Date()
  const phone = req.from

  return {text, date, phone}
}

router.post('/', urlEncodedParser, (req, res) => {
  insertEntry(parseRequest(req.body))

  const twiml = new Twilio(config.TWILIO_SID, config.TWILIO_AUTH).twiml.MessagingResponse

  twiml.message('Response Recorded')

  res.send(twiml.toString())
})

module.exports = router
