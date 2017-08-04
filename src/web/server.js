import config from '../config'
import db from '../db'
import path from 'path'
import express from 'express'
import message from './message'
import main from './main'

const app = express()

app.use(express.static(__dirname + '/pages'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/pages/index.html'))
})

app.use('/message', message)
app.use('/register', main)

db.connect(config.MONGODB_URI, (err) => {
  if (err) {
    console.error('Unable to connect to MongoDB.')
  } else {
    app.listen(config.DEFAULT_PORT)
  }
})
