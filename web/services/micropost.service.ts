import {
  BaseService,
  PaginatableServiceOption,
  ServiceOption,
} from './base.service'
import { ListResponse, Micropost, NoContentResponse, Response } from '~/model'
import { MicropostDraft } from '~/model/micropost'

const enum Constants {
  BASE_PATH = '/microposts',
}

export class MicropostService extends BaseService {
  async list(
    opt: Partial<PaginatableServiceOption> = {}
  ): Promise<ListResponse<Micropost>> {
    const { page } = opt
    return (
      await this.$get<ListResponse<Micropost>>(`${Constants.BASE_PATH}`, {
        query: { page },
        ...opt,
      })
    ).data
  }

  async get(
    id: string,
    opt: Partial<ServiceOption> = {}
  ): Promise<Response<Micropost>> {
    return (
      await this.$get<Response<Micropost>>(`${Constants.BASE_PATH}/${id}`, opt)
    ).data
  }

  async create(
    draft: MicropostDraft,
    opt: Partial<ServiceOption> = {}
  ): Promise<Response<Micropost>> {
    return (
      await this.$post<Response<Micropost>>(
        `${Constants.BASE_PATH}`,
        draft,
        opt
      )
    ).data
  }

  async delete(
    id: string,
    opt: Partial<ServiceOption> = {}
  ): Promise<NoContentResponse> {
    return (
      await this.$delete<NoContentResponse>(`${Constants.BASE_PATH}/${id}`, opt)
    ).data
  }
}
