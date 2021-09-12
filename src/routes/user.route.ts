import express from 'express'
import {UserController} from '../controllers/user.controller'

export class UserRoutes {
	router: express.Router
	constructor() {
		this.router = express.Router()
		this.routes()
	}
	routes() {
		this.router.post('/saveUser', async (req, res, next) => {
			try {
				const saveUser: any = await new UserController().saveUser(req.body)
				return res.json(saveUser)
			} catch (error) {
				return next(error)
			}
		})
		this.router.post('/loginUser', async (req, res, next) => {
			try {
				const findUser: any = await new UserController().saveUser(req.body)
				return res.json(findUser)
			} catch (error) {
				return next(error)
			}
		})
	}
}

export const UserRoutesApi = new UserRoutes().router
