'use strict'

const config = require('../config')
const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')

mongoose.connection.on('connected', () => {
  console.log('MongoDB is connected')
})

mongoose.connection.on('error', (err) => {
  console.log(`Could not connect to MongoDB because of ${err}`)
  process.exit(1)
})

mongoose.set('debug', true)

exports.connect = () => {

  mongoose.connect(config.mongoURI, {
    keepAlive: 1,
    useNewUrlParser: true
  })

  mongoose.set('useCreateIndex', true)

  return mongoose.connection
}