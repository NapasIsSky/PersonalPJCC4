const express = require('express')
const app = express()
const cors = require('cors')
const mysql = require('mysql2')

const bodyParser = require('body-parser')
const db = require('./models')

const rackMap = require('./services/rackMap')

// cors policy
app.use(cors())
// parse application/json
app.use(bodyParser.json());
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

db.sequelize.sync({ force: false }).then(() => {
  rackMap(app, db)
 
  app.listen(7070, () => {
    console.log("Server is running on port 7070")
  })
})