import { Router } from 'express'
export const router = Router()
import { router as deviceRouter } from './deviceRouter'
import { router as cartRouter } from './cartRouter'

router.use('/device', deviceRouter)
router.use('/cart', cartRouter)