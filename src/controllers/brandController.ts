import { Response } from "express"
import { Brand } from "../models/models"


class BrandController {
  
  async create (req: any, res: Response) {
    const {name} = req.body
    const brand = await Brand.create({name})
    return res.json(brand)
  }

  async getAll (req: any, res: Response) {
    const brands = await Brand.findAll()
    return res.json(brands)
  }

  // async check (req: any, res: Response) {
    
  // }
}

export const brandController = new BrandController()