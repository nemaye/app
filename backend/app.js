const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const auth = require('./routes/auth')
const app = express()
require('dotenv').config()


mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then( () => {
    console.log('connected to database')
})
.catch( err => {
    console.log(err)
})

app.use(bodyParser.json())
app.use('/api',auth)


app.listen(4000, () => {
    console.log('server listening...')
})

