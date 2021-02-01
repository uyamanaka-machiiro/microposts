import { actionTree, getterTree, mutationTree } from 'nuxt-typed-vuex'
import { isEmpty } from 'lodash'
import { CommonMutationType } from './common'
import { isSuccess, Micropost, Pagination } from '~/model'
import { MicropostService } from '~/services'
import { MicropostDraft } from '~/model/micropost'

export interface RootState {
  microposts: Micropost[]
  page: Pagination
}

export const state = (): RootState => ({
  microposts: [],
  page: { count: 0, limit: 0, pages: 1, current: 1, next: null, prev: null },
})

export const getters = getterTree(state, {
  microposts: (state) => state.microposts,
  page: (state) => state.page,
  hasNext: (state) => !isEmpty(state.page.next),
  hasPrev: (state) => !isEmpty(state.page.prev),
})

export const mutations = mutationTree(state, {
  [CommonMutationType.ResetState]: (s) => {
    Object.assign(s, state())
  },
  setMicroposts: (state, microposts: Micropost[]) => {
    state.microposts = microposts
  },
  setPagination: (state, pagination: Pagination) => {
    state.page = pagination
  },
})

export const actions = actionTree(
  { state, getters, mutations },
  {
    async list({ commit }, page?: number | null) {
      const micropostService = new MicropostService(this.app.$accessor)
      const postsResponse = await micropostService.list({ page })

      if (!isSuccess(postsResponse)) {
        // show error
        return
      }

      commit('setMicroposts', postsResponse.data)
      commit('setPagination', postsResponse.pagination)
    },
    async reload() {
      const {
        list,
        page: { current },
      } = this.app.$accessor.micropost
      await list(current)
    },

    async next() {
      const { hasNext, list, page } = this.app.$accessor.micropost
      if (hasNext) {
        await list(page.next)
      }
    },

    async prev() {
      const { hasPrev, list, page } = this.app.$accessor.micropost
      if (hasPrev) {
        await list(page.prev)
      }
    },

    async post(_, draft: MicropostDraft) {
      const { $accessor } = this.app
      const micropostService = new MicropostService($accessor)
      const postResponse = await micropostService.create(draft)

      if (!isSuccess(postResponse)) {
        // show error
        return
      }
      const { reload } = $accessor.micropost
      await reload()
    },

    async delete(_, id: string) {
      const { $accessor } = this.app
      const micropostService = new MicropostService($accessor)
      const postResponse = await micropostService.delete(id)

      if (isSuccess(postResponse)) {
        // show error
        return
      }
      const { reload } = $accessor.micropost
      await reload()
    },
  }
)
