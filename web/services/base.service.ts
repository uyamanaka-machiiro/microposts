import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { camelCase, isEmpty, snakeCase } from 'lodash'
import { accessorType } from '~/store'
import { isDefined, convertKeyCaseSensitive } from '~/utils'

export interface ServiceOption {
  token: boolean | string
  headers?: AxiosRequestConfig['headers']
}

const defaultOption: ServiceOption = {
  token: true,
}

function createAxios(baseURL: string) {
  const newAxios = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'Access-Control-Allow-Origin': '*',
    },
    responseType: 'json',
  })

  newAxios.interceptors.request.use((request) => {
    if (isDefined(request.data)) {
      console.log(request.data)
      request.data = convertKeyCaseSensitive(request.data, snakeCase)
      console.log(request.data)
    }
    return request
  })

  newAxios.interceptors.response.use((response) => {
    if (isDefined(response.data)) {
      response.data = convertKeyCaseSensitive(response.data, camelCase)
    }
    return response
  })

  return newAxios
}

export abstract class BaseService {
  // FIXME use env
  private readonly host = 'localhost' as const
  private readonly port = 3000 as const
  private readonly useHttps = false
  private readonly $axios = createAxios(this.baseURL)

  // eslint-disable-next-line no-useless-constructor
  constructor(protected readonly $accessor: typeof accessorType) {}

  get baseURL() {
    return `http${this.useHttps ? 's' : ''}://${this.host}:${this.port}/api`
  }

  get token() {
    return this.$accessor.auth.token
  }

  private prefixOption(opt: Partial<ServiceOption>) {
    return {
      ...defaultOption,
      ...opt,
    }
  }

  private chooseToken(token: boolean | string): string | undefined {
    if (token === true) {
      const stored = this.$accessor.auth.token
      if (isEmpty(stored)) {
        throw new Error('this request required token but not issued')
      }
      return `Bearer ${this.$accessor.auth.token}`
    } else if (typeof token === 'string') {
      return `Bearer ${token}`
    } else {
      return undefined
    }
  }

  private toAxiosRequestConfig(
    opt: Partial<ServiceOption>
  ): AxiosRequestConfig {
    const option = this.prefixOption(opt)
    const { headers } = option

    return {
      headers: {
        Authorization: this.chooseToken(option.token),
        ...headers,
      },
    }
  }

  $get<T>(
    path: string,
    opt: Partial<ServiceOption> = {}
  ): Promise<AxiosResponse<T>> {
    return this.$axios.get<T>(path, this.toAxiosRequestConfig(opt))
  }

  $post<T>(
    path: string,
    data?: any,
    opt: Partial<ServiceOption> = {}
  ): Promise<AxiosResponse<T>> {
    return this.$axios.post<T>(path, data, this.toAxiosRequestConfig(opt))
  }

  $put<T>(
    path: string,
    data?: any,
    opt: Partial<ServiceOption> = {}
  ): Promise<AxiosResponse<T>> {
    return this.$axios.put<T>(path, data, this.toAxiosRequestConfig(opt))
  }

  $patch<T>(
    path: string,
    data?: any,
    opt: Partial<ServiceOption> = {}
  ): Promise<AxiosResponse<T>> {
    return this.$axios.patch<T>(path, data, this.toAxiosRequestConfig(opt))
  }

  $delete<T>(
    path: string,
    opt: Partial<ServiceOption> = {}
  ): Promise<AxiosResponse<T>> {
    return this.$axios.delete<T>(path, this.toAxiosRequestConfig(opt))
  }
}
