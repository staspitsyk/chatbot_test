const dotenv = require('dotenv').config();

module.exports = {
    "db": {
    "name": process.env.DB_NAME,
    "user": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "dialect": process.env.DB_DIALECT
  },
  "auth": {
    "secretKey": process.env.SECRET_KEY,
    "expiresIn": process.env.EXPIRES_IN
  }
}