import { Request, Response } from 'express'
import { T } from '../libs/types/common'
// import MemberService from '../models/Member.service'

const restauntController: T = {}

restauntController.goHome = (req: Request, res: Response) => {
	try {
		res.send('Home Page')
	} catch (err) {
		console.log('Error, goHome:', err)
	}
}

restauntController.getLogin = (req: Request, res: Response) => {
	try {
		res.send('Login Page')
	} catch (err) {
		console.log('Error, getLogin:', err)
	}
}

restauntController.getSignup = (req: Request, res: Response) => {
	try {
		res.send('Signup Page')
	} catch (err) {
		console.log('Error, getSignup:', err)
	}
}

export default restauntController
