import config from '../../config'
import Twilio from 'twilio'

const client = new Twilio(config.TWILIO_SID, config.TWILIO_AUTH)

export const sendMessage = (message, number) => {
  client.messages.create({
    body: message,
    to: number,
    from: config.TWILIO_NUMBER
  })
    .then((sms) => console.log(sms.sid))
}
