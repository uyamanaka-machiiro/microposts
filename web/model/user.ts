export interface User {
  id: number
  name: string
  email: string
  createdAt: string
  modifiedAt: string
  deletedAt?: string
}

export interface UserDraft extends Partial<User> {}

export interface SignUpUser {
  name: string
  email: string
  password: string
  passwordConfirmation: string
}
