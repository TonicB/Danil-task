import { Router } from 'express'
export const router = Router()
import { brandController } from '../controllers/brandController'

router.post('/', brandController.create)
router.get('/', brandController.getAll)