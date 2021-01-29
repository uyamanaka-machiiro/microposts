import { StatusCodes } from 'http-status-codes'

export interface Response<T> {
  status: string | number
  data: T
}

export interface ListResponse<T> extends Response<Array<T>> {
  pagination: {}
}

export interface NoContentResponse extends Response<undefined> {}

export interface ServerErrorResponse extends Response<undefined> {
  error: string
  exception?: string
  traces?: {
    ApplicationTrace?: {
      id: number
      trace: string
    }[]
    FrameworkTrace?: {
      id: number
      trace: string
    }[]
  }
}

export interface ClientErrorResponse extends Response<unknown | undefined> {
  error: string
}

export type ErrorResponse = ServerErrorResponse | ClientErrorResponse

function findStatus(
  predicate: (key: keyof typeof StatusCodes) => boolean
): (keyof typeof StatusCodes)[] {
  return (Object.keys(StatusCodes) as (keyof typeof StatusCodes)[]).filter(
    predicate
  )
}

function isSameStatus(
  status: keyof typeof StatusCodes,
  responseStatus: string | number
): boolean {
  if (typeof responseStatus === 'string') {
    return status.toLowerCase() === responseStatus.toLowerCase()
  } else {
    return StatusCodes[status] === responseStatus
  }
}

export function isSuccess(response: Response<unknown>): boolean {
  return (
    findStatus(
      (k) => StatusCodes[k] >= 200 && StatusCodes[k] < 300
    ).findIndex((k) => isSameStatus(k, response.status)) > -1
  )
}

export function isServerError(
  response: Response<unknown>
): response is ServerErrorResponse {
  return (
    findStatus(
      (k) => StatusCodes[k] >= 500 && StatusCodes[k] < 600
    ).findIndex((k) => isSameStatus(k, response.status)) > -1
  )
}

export function isClientError(
  response: Response<unknown>
): response is ClientErrorResponse {
  return (
    findStatus(
      (k) => StatusCodes[k] >= 400 && StatusCodes[k] < 500
    ).findIndex((k) => isSameStatus(k, response.status)) > -1
  )
}
