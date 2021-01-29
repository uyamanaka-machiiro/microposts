import { isUndefined, isNull } from 'lodash'

type Defined<T> = T extends null | undefined ? never : T

export function isDefined<T>(value: T): value is Defined<T> {
  return !isUndefined(value) && !isNull(value)
}

type NotDefined<T> = T extends null | undefined ? T : never

export function isNotDefined<T>(value: T): value is NotDefined<T> {
  return !isDefined(value)
}
