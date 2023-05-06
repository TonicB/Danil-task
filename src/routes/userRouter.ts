import { Router } from 'express'
import { userController } from '../controllers/userController'
export const router = Router()
import { authMiidleware } from '../middlewares/authMiddleware'

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', authMiidleware, userController.check)

// router.get('/auth', (req, res) => {
//   res.json({message: 'ALL Working!!!'})
// })

