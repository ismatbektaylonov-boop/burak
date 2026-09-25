import express from 'express'
import restauntController from './controllers/restaurant.controller'
const router = express.Router()

router.get('/', restauntController.goHome)

router.get('/login', restauntController.getLogin)

router.get('/signup', restauntController.getSignup)

export default router
