import { Sequelize } from "sequelize";
import path from 'path'
import dotenv from 'dotenv'
dotenv.config({path: path.join(__dirname, '/.env')})

declare const process : {
  env: {
    DB_NAME: string,
    DB_USER: string,
    DB_PASSWORD: string,
    DB_HOST: string,
    DB_PORT: number,
  }
}

export const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect: 'postgres',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT
  }

)