import { Entity } from './common'

export interface User extends Entity {
  name: string
  email: string
}

export interface UserDraft extends Partial<User> {}

export interface SignUpUser {
  name: string
  email: string
  password: string
  passwordConfirmation: string
}
