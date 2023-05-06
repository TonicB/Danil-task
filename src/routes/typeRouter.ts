import { Router } from 'express'
import { typeController } from '../controllers/typeController'
export const router = Router()

router.post('/', typeController.create)
router.get('/', typeController.getAll)