import {findAncestor} from 'typescript'
import {studentModel} from '../models/student.model'
import {teacherModel} from '../models/teacher.model'
import {userModel} from '../models/user.model'
import {IUser} from '../types/documents/user.document'
import ErrorHandler from '../utils/error'

export class UserRepository {
	constructor() {}
	async saveUser(user: IUser) {
		console.log({user})
		const newUser = await new userModel(user).save()
		console.log({newUser})
		const role: string = newUser?.userRole
		const NewRole = {
			profileId: newUser?._id,
		}
		console.log(role)
		let newrole
		switch (role) {
			case 'student':
				try {
					this.saveStudent(NewRole)
				} catch (error) {
					console.log(error)
				}
				break
			case 'teacher':
				try {
					newrole = this.saveTeacher(NewRole)
					return {newrole: newrole, nji: 'mkiooo', newUser}
				} catch (error) {
					console.log(error)
				}
			default:
				'donothing'
		}

		console.log({newrole})
	}
	async loginUser(loginDetails: any) {
		const loggedUser = await userModel.find({email: loginDetails?.email})
		if (loggedUser.length === 0) return new ErrorHandler(404, 'No User Found')
		return loggedUser
	}
	async saveStudent(studentId: any) {
		console.log({studentId})
		const studentProfile = await new studentModel(studentId).save()

		console.log({studentProfile})
		return studentProfile
	}
	async saveTeacher(teacherId: any) {
		const teacherProfile = await new teacherModel(teacherId).save()
		return teacherProfile
	}
}
