const express = require('express')
const app = express()
const cors = require('cors')

const bodyParser = require('body-parser')
const db = require('./models')


// cors policy
app.use(cors())
// parse application/json
app.use(bodyParser.json());
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

db.sequelize.sync({ force: true }).then(() => {
 

  app.listen(7070, () => {
    console.log("Server is running on port 7070")
  })
})