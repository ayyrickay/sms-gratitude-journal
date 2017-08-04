import config from '../config'
import db from '../db'
import express from 'express'
import message from './message'

const app = express()

app.use('/message', message)


console.log(config)
db.connect(config.MONGODB_URI, (err) => {
  if (err) {
    console.error('Unable to connect to MongoDB.')
  } else {
    app.listen(config.DEFAULT_PORT)
  }
})
