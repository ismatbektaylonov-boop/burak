import { Request, Response } from 'express'
import { MemberType } from '../libs/enums/member.enum'
import { Message } from '../libs/Errors'
import { T } from '../libs/types/common'
import { AdminRequest, LoginInput, MemberInput } from '../libs/types/member'
import MemberService from '../models/Member.service'

const restaurantController: T = {}

restaurantController.goHome = (req: Request, res: Response) => {
	try {
		console.log('Home Page')
		res.render('home')
	} catch (err) {
		console.log('Error, goHome:', err)
	}
}

restaurantController.getSignup = (req: Request, res: Response) => {
	try {
		console.log('Signup Page')
		res.render('signup')
	} catch (err) {
		console.log('Error, getSignup:', err)
	}
}

restaurantController.getLogin = (req: Request, res: Response) => {
	try {
		console.log('Login Page')
		res.render('login')
	} catch (err) {
		console.log('Error, getLogin:', err)
	}
}

restaurantController.processSignup = async (
	req: AdminRequest,
	res: Response,
) => {
	try {
		console.log('process Signup')
		console.log('body:', req.body)

		const newMember: MemberInput = req.body
		newMember.memberType = MemberType.RESTAURANT

		const memberService = new MemberService()
		const result = await memberService.processSignup(newMember)
		//TODO: SESSIONS AUTHENTICATION
		req.session.member = result
		req.session.save(function () {
			res.send(result)
		})
	} catch (err) {
		console.log('Error, processSignup:', err)
		res.send(err)
	}
}

restaurantController.processLogin = async (
	req: AdminRequest,
	res: Response,
) => {
	try {
		console.log('process Login')
		console.log('body:', req.body)
		const input: LoginInput = req.body

		const memberService = new MemberService()
		const result = await memberService.processLogin(input)
		//TODO: SESSIONS AUTHENTICATION
		req.session.member = result
		req.session.save(function () {
			res.send(result)
		})
	} catch (err) {
		console.log('Error, processLogin:', err)
		res.send(err)
	}
}

restaurantController.checkAuthSession = async (
	req: AdminRequest,
	res: Response,
) => {
	try {
		console.log('checkAuthSession')
		if (req.session?.member)
			res.send(`<script> alert("${req.session.member.memberNick}")</script>`)
		else res.send(`<script> alert("${Message.NOT_AUTHENTICATED}")</script>`)
	} catch (err) {
		console.log('Error,checkAuthSession', err)
		res.send(err)
	}
}

export default restaurantController
