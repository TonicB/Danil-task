import {NextFunction, Response } from "express";
import { Cart} from "../models/models";
import { ApiError } from "../error/ApiErrors";


class CartController {
  
  async create (req: any, res: Response, next: NextFunction) {
    try {
      const {deviceId} = req.body 
      const cartDevice = await Cart.create({deviceId})
      return res.json(cartDevice)
    } catch (e) {
      next(ApiError.badRequest((e as Error).message))
    }
  }
  async getAll (req: any, res: Response) {
    const  devicesId = await Cart.findAll()

    return res.json(devicesId)
  }

}

export const cartController = new CartController()