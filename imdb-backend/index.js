const express = require('express')
const port = 5000
const connectToMongo = require("./db")
var cors = require('cors');
connectToMongo();

const app = express()

app.use(cors())
app.use(express.json()); 

app.use('/api/movies', require('./routes/movies.js'))

app.listen(port, () => {
  console.log(`Movie App is listening on port ${port}`)
})