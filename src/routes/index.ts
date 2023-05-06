import { Router } from 'express'
import { router as brandRouter } from './brandRouter'
import { router as userRouter } from './userRouter'
import { router as deviceRouter } from './deviceRouter'
import { router as typedRouter } from './typeRouter'
export const router = Router()

router.use('/user', userRouter)
router.use('/type', typedRouter)
router.use('/brand', brandRouter)
router.use('/device', deviceRouter)