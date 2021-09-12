import {Schema, model} from 'mongoose'
import {IUser} from '../types/documents/user.document'

const userSchema = new Schema(
	{
		name: {
			type: String,
		},
		password: {
			type: String,
			required: [true, 'please provide the password'],
		},
		email: {
			type: String,
			unique: [true, 'already in use'],
		},
		userRole: {
			type: String,
			lowercase: true,
			trim: true,
			default: 'student',
			enum: ['admin', 'student', 'teacher'],
		},
	},
	{
		timestamps: true,
	}
)

export const userModel = model<IUser>('user', userSchema)
