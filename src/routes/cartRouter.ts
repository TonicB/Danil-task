import { Router } from 'express'
import { cartController } from '../controllers/cartController'
export const router = Router()

router.get('/', cartController.getAll)
router.post('/', cartController.create)
