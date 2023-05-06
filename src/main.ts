import path from 'path'
import dotenv from 'dotenv'
import express from 'express'
import {sequelize} from './db'
import { User, Bascet, BascetDevice, Device, Type, Brand, Raiting, DeviceInfo, TypeBrand } from './models/models'
import cors from 'cors'
import fileUpload from 'express-fileupload'
import { router } from './routes/index'
import { errorHandlingMiidleware } from './middlewares/ErrorHandlingMiddleware'

dotenv.config({path: path.join(__dirname, '/.env')})

const PORT = process.env.PORT 
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)
//Обработка ошибок, последний middleware
app.use(errorHandlingMiidleware)
// app.get('/', (req, res) => {
//   res.status(200).json({message: 'Working!!!'})
// })

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