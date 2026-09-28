import express from 'express'
import restauntController from './controllers/restaurant.controller'
const router = express.Router()

/* Restaurant */
router.get('/', restauntController.goHome)
router
	.get('/login', restauntController.getLogin)
	.post('/login', restauntController.processLogin)
router
	.get('/signup', restauntController.getSignup)
	.post('/signup', restauntController.processSignup)
/* Product */
/* User */

export default router
