require('dotenv').config()
const express = require('express'),
      session = require('express-session'),
      axios = require('axios'),
      ctrl = require('./Controller'),
      checkUserSession = require('./Middleware/CheckSuerSession')

const app = express()

const {
  SESSION_SECRET,
  SERVER_PORT
} = process.env

app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))

app.use(express.json())

app.use(checkUserSession)

app.use( express.static( `${__dirname}/../build` ) )

/**********************************************/
/**********************************************/

app.listen(SERVER_PORT, () => {
  console.log(`Arrr! Ye be runnin' on port ${SERVER_PORT}`)
})