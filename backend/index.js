const express = require('express')
const app = express()
const cors = require('cors')
const mysql = require('mysql2')

const bodyParser = require('body-parser')
const db = require('./models')

const rackMap = require('./services/rackMap')
const stock = require('./services/stock')
const address = require('./services/address')
const customerAddress = require('./services/cutomerAddress')
const customer = require('./services/customer')
const group = require('./services/group')

// cors policy
app.use(cors())
// parse application/json
app.use(bodyParser.json());
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

db.sequelize.sync({ force: true }).then(() => {
  rackMap(app, db),
  stock(app,db),
  address(app,db),
  customerAddress(app,db),
  customer(app,db),
  group(app,db)
 
  app.listen(7070, () => {
    console.log("Server is running on port 7070")
  })
})