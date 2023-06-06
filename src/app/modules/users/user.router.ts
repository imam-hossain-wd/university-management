import { Router } from 'express'
import controller from './user.controller'

const router = Router()

router.post('/create-user', controller.createduser)
router.get('/', controller.getUser)
router.delete('/user/:id', controller.deleteUser)
router.put('/user/:id', controller.updatePassword)

export default router
