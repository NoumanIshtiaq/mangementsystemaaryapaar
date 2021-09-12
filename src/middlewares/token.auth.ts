import {Request, Response, NextFunction} from 'express'
import jwt from 'jsonwebtoken'
import {jwtSecretKey} from '../utils/constants'

const extractJwt = async (req: any, res: Response, next: NextFunction) => {
	let token = req.headers.authorization?.split(' ')[1] // checking token
	/**
	 * if token not found
	 */
	if (!token) return res.status(400).json({msg: 'Invalid Authentication'})
	/**
	 * tryCatch block for checking token
	 */
	try {
		jwt.verify(token, jwtSecretKey, (err: any, user: any) => {
			if (err) return res.status(400).json({msg: 'Invalid T Authentication'})
			// if decoded saving it in req.user and calling next
			req.user = user
			return next()
		})
	} catch (error) {
		return next(error)
	}
}
export default extractJwt
