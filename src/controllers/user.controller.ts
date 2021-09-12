import {Body, Post, Route} from '@tsoa/runtime'
import {UserRepository} from '../repositories/user.repository'
import {IStudentLoginRequest} from '../types/requests/student.request'
import {IUserAddRequest} from '../types/requests/user.request'
import {IUserAddResponse} from '../types/responses/user.response'
import ErrorHandler from '../utils/error'

@Route('user')
export class UserController {
	constructor() {}
	/**
	 * This is used for registering the user. For userRole type exact spelling in lowercase Type "admin" for registering admin likewise student,waiter
	 * @summary For userRole type exact spelling in lowercase Type "admin" for registering admin likewise student,waiter
	 * @param saveUserReq  for userRole type exact spellings .
	 * @returns result
	 */
	@Post('/saveUser')
	async saveUser(
		@Body() saveUserRequest: IUserAddRequest
	): Promise<IUserAddResponse> {
		const newUser: any = await new UserRepository().saveUser(
			<any>saveUserRequest
		)
		if (newUser === null) throw new ErrorHandler(404, 'Not Found')
		return <any>newUser
	}
	/**
	 * This is used for login the user. Enter the email and password to signIn to your account
	 * @summary For admin login email:admin123@gmail.com , password:admin123. For user login. email:user123@gmail.com  & password: user123
	 * @param saveUserReq  for userRole type exact spellings .
	 * @returns result
	 */
	@Post('/loginUser')
	async loginUser(
		@Body() loginUserRequest: IStudentLoginRequest
	): Promise<IUserAddResponse> {
		const searchUser: any = await new UserRepository().saveUser(
			<any>loginUserRequest
		)
		if (searchUser === null) throw new ErrorHandler(404, 'Not Found')
		return <any>searchUser
	}
}
