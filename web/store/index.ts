import { getAccessorType, actionTree } from 'nuxt-typed-vuex'

import * as auth from './auth'
import { CommonMutationType } from './common'

export const state = () => ({})

export const getters = {}

export const mutations = {}

export const actions = actionTree(
  { state, getters, mutations },
  {
    resetAll({ commit }) {
      const _commit = commit as Function // FIXME "nuxt-typed-vuex"の型推論がまだTypescript最新版ではない
      _commit(`auth/${CommonMutationType.ResetState}`)
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
  },
})
