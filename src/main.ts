import path from 'path'
import dotenv from 'dotenv'
dotenv.config({path: path.join(__dirname, '/.env')})
import express from 'express'
import {sequelize} from './db'
const message = "Hi"
console.log(message)

const PORT = process.env.PORT 
const app = express()

const start = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
  } catch (e) {
    console.log(e)
  }
}

start()

