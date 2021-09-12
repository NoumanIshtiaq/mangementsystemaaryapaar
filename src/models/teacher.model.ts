import {Schema, model} from 'mongoose'
import {ITeacher} from '../types/documents/student.document'

const teacherSchema = new Schema(
	{
		profileId: {
			type: Schema.Types.ObjectId,
			ref: 'user',
		},
		marksObtained: {
			type: Number,
		},
		marksTotal: {
			type: Number,
		},
		class: {
			type: Number,
		},
	},
	{
		timestamps: true,
	}
)

export const teacherModel = model<ITeacher>('teacher', teacherSchema)
