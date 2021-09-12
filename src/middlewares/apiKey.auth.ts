import {Response, Request, NextFunction} from 'express'

const apiKeyAuth = (req: Request, res: Response, next: NextFunction) => {
	let apiKey = req.query.adminToken

	/**
	 * checking whether the apikey is present and is valid
	 */

	if (apiKey && apiKey === '1234567') return next()

	/**
	 * this will return error if apikey is not present and also if wrong
	 */

	return res.json({status: 401, error: 'You ar Not Authorized'})
}

export default apiKeyAuth
