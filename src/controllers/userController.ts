import  { NextFunction, Response } from "express";
import { ApiError } from "../error/ApiErrors";
import bcrypt from "bcrypt"
import { User, Bascet, UserInstance } from "../models/models";
import jwt from "jsonwebtoken"
import  * as uuid  from "uuid";
import { createDiffieHellmanGroup } from "crypto";

const generateJwt = (id: any, email: any, role: any) => {
  return jwt.sign(
    {id: id, email: email, role},
    process.env.SECRET_KEY,
    {expiresIn: '24h'}
  )
}

declare const process : {
  env: {
    SECRET_KEY: string,
  }
}

class UserController {
  
  async registration (req: any, res: Response, next: NextFunction)  {
    const {email, role, password} = req.body
    if (!email || !password) {
      return next(ApiError.badRequest('Некорректный email или password'))
    }
    const candidate = await User.findOne({where: {email}})
    if (candidate) {
      return next(ApiError.badRequest('Пользователь с таким email уже существует'))
    }
    const hashPassword = await bcrypt.hash(password, 5)
    const userId = uuid.v4()
    const user = await User.create({userId, email, role, password: hashPassword})
    // console.log(id)

    const bascet = await Bascet.create({bascetId: userId})
    // const token = generateJwt(userId, email, )
    const token = jwt.sign(
      {id: userId, email: email, role},
      process.env.SECRET_KEY,
      {expiresIn: '24h'}
    )
    return res.json({token})
  }

  async login (req: any, res: Response, next: NextFunction)  {
    const {email, password} = req.body
    const user = await User.findOne({where: {email}}) as UserInstance
    if(!user) {
      return next(ApiError.internal('Пользователь не найден'))
    }
    const comparePassword = bcrypt.compareSync(password, user.password)
    if(!comparePassword) {
      return next(ApiError.internal('Указан неверный пароль'))
    }
    const token = jwt.sign(
      {id: user.userId, email: email, role: user.role},
      process.env.SECRET_KEY,
      {expiresIn: '24h'}
    )
    return res.json({token})

  }

  async check (req: any, res: Response, next: NextFunction)  {
  const token = jwt.sign(
    {id: req.user.userId, email: req.user.email, role: req.user.role},
    process.env.SECRET_KEY,
    {expiresIn: '24h'}
  )
  return res.json({token})

}

}
export const userController = new UserController()