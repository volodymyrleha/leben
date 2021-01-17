require('dotenv').config() // load .env file

module.exports = {
  port: process.env.PORT,
  secret: process.env.SECRET,
  mongoUri: process.env.MONGO_URI,
  app: 'Leben'
}
