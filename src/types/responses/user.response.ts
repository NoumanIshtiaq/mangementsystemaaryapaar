export interface IUserAddResponse {
	_id: string
	name: string
	password: string
	email: string
	/**
	 * Number mapping
	 */
	userRole: string
	createdAt?: string
	updatedAt?: string
}
