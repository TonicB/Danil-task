import { NextFunction, Response } from "express";
import path from "path";
import  * as uuid  from "uuid";
import { Device, DeviceInfo } from "../models/models";
import { ApiError } from "../error/ApiErrors";


class DeviceController {
  
  async create (req: any, res: Response, next: NextFunction) {
    try {
      let {name, price, brandId, typeId, info} = req.body
      const {img} = req.files
      const filname = uuid.v4() + ".jpg"
      img.mv(path.resolve(__dirname, '..', 'static', filname))
      
      const deviceId = uuid.v4()
      const device = await Device.create({deviceId, name, price, brandId, typeId, img: filname})
      if (info) {
        info = JSON.parse(info)
        info.forEach((el: { title: any; description: any; deveceId: any}) => {
          DeviceInfo.create({
            title: el.title,
            description: el.description,
            deviceId: deviceId
          })
        });
      }
      return res.json(device)
    } catch (e) {
      next(ApiError.badRequest((e as Error).message))
    }
  }

  async getAll (req: any, res: Response) {
    const {brandId, typeId} = req.query;
    let devices: any;
    if(!brandId && !typeId) {
      devices = await Device.findAll()
    }

    if(brandId && !typeId) {
      devices = await Device.findAll({where: {brandId}})

    }

    if(!brandId && typeId) {
      devices = await Device.findAll({where: {typeId}})

    }

    if(brandId && typeId) {
      devices = await Device.findAll({where: {typeId, brandId}})

    }

    return res.json(devices)
  }

  async getOne (req: any, res: Response) {
    const {id} = req.params
    const device = await Device.findOne(
      {
        where: {id},
        include: [{model: DeviceInfo, as: "info"}]
      }
    )
    return res.json(device)
  }
}

export const deviceController = new DeviceController()