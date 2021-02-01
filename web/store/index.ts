import { getAccessorType, actionTree } from 'nuxt-typed-vuex'

import * as auth from './auth'
import * as micropost from './micropost'
import { CommonMutationType } from './common'

export const state = () => ({})

export const getters = {}

export const mutations = {}

export const actions = actionTree(
  { state, getters, mutations },
  {
    resetAll({ commit }) {
      const _commit = commit as Function // FIXME "nuxt-typed-vuex"の型推論がまだTypescript最新版ではなく、推論が効かない。敗北
      _commit(`auth/${CommonMutationType.ResetState}`)
      _commit(`microposts/${CommonMutationType.ResetState}`)
    },
  }
)

export const accessorType = getAccessorType({
  state,
  getters,
  mutations,
  actions,
  modules: {
    auth,
    micropost,
  },
})
