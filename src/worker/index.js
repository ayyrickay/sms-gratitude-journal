/* eslint-disable no-unused-vars */
import config from '../config'
import {DAILY_TEXT} from './constants'
import db from '../db'
import schedule from 'node-schedule'
import {sendMessage} from './twilio'

let dailyText

const recurrence = new schedule.RecurrenceRule()
recurrence.hour = 16

async function findUsers () {
  return await db.get().collection('users').find().toArray()
}

async function sendMessageToUsers (users) {
  const userArray = await users
  console.log(userArray)
  userArray.forEach((user) => {
    sendMessage(DAILY_TEXT, user.phone)
  })
}

db.connect(config.MONGODB_URI, (err) => {
  if (err) {
    console.error('Unable to connect to MongoDB.')
  } else {
    const users = findUsers()
    dailyText = schedule.scheduleJob(recurrence, () => {
      console.log('message sent')
      sendMessageToUsers(users)
    })
  }
})
