import { BaseService, ServiceOption } from './base.service'
import { ListResponse, Response } from '~/model'
import { SignUpUser, User } from '~/model/user'

const enum Constants {
  BASE_PATH = '/users',
}

export class UserService extends BaseService {
  async getSelf(opt: Partial<ServiceOption> = {}): Promise<Response<User>> {
    return (await this.$get<Response<User>>(`${Constants.BASE_PATH}/me`, opt))
      .data
  }

  async getById(
    id: number,
    opt: Partial<ServiceOption> = {}
  ): Promise<Response<User>> {
    return (
      await this.$get<Response<User>>(`${Constants.BASE_PATH}/${id}`, opt)
    ).data
  }

  async find(opt: Partial<ServiceOption> = {}): Promise<ListResponse<User>> {
    return (await this.$get<ListResponse<User>>(Constants.BASE_PATH, opt)).data
  }

  async create(
    newUser: SignUpUser,
    opt: Partial<ServiceOption> = {}
  ): Promise<Response<User>> {
    return (await this.$post<Response<User>>(Constants.BASE_PATH, newUser, opt))
      .data
  }

  async update() {}

  async patch() {}
}
