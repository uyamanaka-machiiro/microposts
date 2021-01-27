import { BaseService, ServiceOption } from './base.service'
import { ListResponse, Response } from '~/model'
import { accessorType } from '~/store'
import { SignUpUser, User } from '~/model/user'

export class UserService extends BaseService {
  constructor(readonly $accessor: typeof accessorType) {
    super($accessor)
  }

  async getSelf(opt: Partial<ServiceOption> = {}): Promise<Response<User>> {
    return (await this.$get<Response<User>>('/users/me', opt)).data
  }

  async getById(
    id: number,
    opt: Partial<ServiceOption> = {}
  ): Promise<Response<User>> {
    return (await this.$get<Response<User>>(`/users/${id}`, opt)).data
  }

  async find(opt: Partial<ServiceOption> = {}): Promise<ListResponse<User>> {
    return (await this.$get<ListResponse<User>>('/users', opt)).data
  }

  async create(
    newUser: SignUpUser,
    opt: Partial<ServiceOption> = {}
  ): Promise<Response<User>> {
    return (await this.$post<Response<User>>('/users', newUser, opt)).data
  }

  async update() {}

  async patch() {}
}
