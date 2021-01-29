import { BaseService, ServiceOption } from './base.service'
import { accessorType } from '~/store'
import { AuthToken, NoContentResponse, Response } from '~/model'

export class AuthService extends BaseService {
  constructor(readonly $accessor: typeof accessorType) {
    super($accessor)
  }

  async signIn(
    email: string,
    password: string,
    opt: Partial<ServiceOption> = {}
  ): Promise<Response<AuthToken>> {
    return (
      await this.$post<Response<AuthToken>>(
        '/auth',
        { email, password },
        { token: false, ...opt }
      )
    ).data
  }

  async signOut(opt: Partial<ServiceOption> = {}): Promise<NoContentResponse> {
    return (await this.$delete<NoContentResponse>('/auth', opt)).data
  }
}
