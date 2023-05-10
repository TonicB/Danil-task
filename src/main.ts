import path from 'path'
import dotenv from 'dotenv'
import express from 'express'
import {sequelize} from './db'
import cors from 'cors'
import fileUpload from 'express-fileupload'
import { Device, Cart } from './models/models'
import { router } from './routes/index'
import { errorHandlingMiidleware } from './middlewares/ErrorHandlingMiddleware'

dotenv.config({path: path.join(__dirname, '/.env')})

const PORT = process.env.PORT || 5000
const app = express()

//Настройка cors чтобы принимать запросы из браузера 
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload())
app.use('/api', router)
//Обработка ошибок, последний middleware
app.use(errorHandlingMiidleware)
app.get('/', (req, res) => {
  res.status(200).json({message: 'Working!!!'})
})

// функция для старта сервера
const start = async () => {
  try {
    await sequelize.authenticate() // подключение к базе
    await sequelize.sync() // сверяем состояние со схемой базы
    await Device.sync();
    await Cart.sync();

    app.listen(PORT, () => console.log(`Server started on port ${PORT}`)) // прослушиваем сервер
  } catch (e) {
    console.log(e)
  }
}

start()