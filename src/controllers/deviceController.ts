import { NextFunction, Response } from "express";
import path from "path";
import  * as uuid  from "uuid";
import { Device, } from "../models/models";
import { ApiError } from "../error/ApiErrors";


class DeviceController {
  
  async create (req: any, res: Response, next: NextFunction) {
    try {
      const {name, price} = req.body 
      const {img} = req.files
      const filname = uuid.v4() + ".jpg"
      img.mv(path.resolve(__dirname, '..', 'static', filname))
      
      const deviceId = uuid.v4()
      const device = await Device.create({deviceId, name, price, img: filname})
      return res.json(device)
    } catch (e) {
      next(ApiError.badRequest((e as Error).message))
    }
  }

  async getAll(req: any, res: Response) {
    const devices = await Device.findAll()
    return res.json(devices)
}

  async getOne (req: any, res: Response) {
    const {id} = req.params
    const device = await Device.findOne(
      {
        where: {id},
      }
    )
    return res.json(device)
  }
}

export const deviceController = new DeviceController()