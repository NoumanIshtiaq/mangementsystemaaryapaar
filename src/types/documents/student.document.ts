import {Document} from 'mongoose'

export interface IStudent extends Document {
	_id: string
	profileId: string
	class: number
	marksObtained: number
	marksTotal: number
	createdAt?: string
	updatedAt?: string
}

export interface ITeacher extends Document {
	_id: string
	profileId: string
	class: number
	marksObtained: number
	marksTotal: number
	createdAt?: string
	updatedAt?: string
}
