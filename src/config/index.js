import server from './server'
import twilio from './twilio'

const config = Object.assign({}, server, twilio)

export default config
