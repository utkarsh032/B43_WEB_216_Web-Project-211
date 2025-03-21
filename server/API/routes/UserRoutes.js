import express from 'express'
import { LogInUsr, SignUpUser } from '../controllers/AuthController.js'

const UserRouter = express.Router()

UserRouter.post('/signup', SignUpUser)

UserRouter.post('/signin', LogInUsr)

export default UserRouter