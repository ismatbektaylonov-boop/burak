import { Request, Response } from 'express'
import { T } from '../libs/types/common'
// import MemberService from '../models/Member.service'

const restauntController: T = {}

restauntController.goHome = (req: Request, res: Response) => {
	try {
		console.log('Home Page')
		res.send('Home Page')
	} catch (err) {
		console.log('Error, goHome:', err)
	}
}

restauntController.getLogin = (req: Request, res: Response) => {
	try {
		console.log('Login Page')
		res.send('Login Page')
	} catch (err) {
		console.log('Error, getLogin:', err)
	}
}

restauntController.getSignup = (req: Request, res: Response) => {
	try {
		console.log('Signup Page')
		res.send('Signup Page')
	} catch (err) {
		console.log('Error, getSignup:', err)
	}
}

restauntController.processLogin = (req: Request, res: Response) => {
	try {
		console.log('process Login')
		res.send('Done')
	} catch (err) {
		console.log('Error, processLogin:', err)
	}
}

restauntController.processSignup = (req: Request, res: Response) => {
	try {
		console.log('process Signup')
		res.send('DONE')
	} catch (err) {
		console.log('Error, processSignup:', err)
	}
}

export default restauntController
