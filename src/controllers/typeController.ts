import { Type } from "../models/models"
import { ApiError } from "../error/ApiErrors"
import { Response } from "express"

class TypeController {
  
  async create (req: any, res: Response) {
    const {name} = req.body
    const type = await Type.create({name})
    return res.json(type)
  }

  async getAll (req: any, res: Response) {
    const types = await Type.findAll()
    return res.json(types)
  }
}

export const typeController = new TypeController()