import { Entity } from './common'

export interface Micropost extends Entity {
  content: string
  userId: number
}

export interface MicropostDraft {
  content: string
}
