import {Schema, model} from 'mongoose'
import {IStudent} from '../types/documents/student.document'

const studentSchema = new Schema(
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

export const studentModel = model<IStudent>('student', studentSchema)
