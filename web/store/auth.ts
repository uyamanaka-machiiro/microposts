import { isEmpty } from 'lodash'
import { getterTree, mutationTree, actionTree } from 'nuxt-typed-vuex'
import { CommonMutationType } from './common'
import { isSuccess, User, SignUpUser } from '~/model'
import { AuthService, UserService } from '~/services'

export interface RootState {
  token: string
  currentUser: User | null
}

export const state = (): RootState => ({
  token: '',
  currentUser: null,
})

export const getters = getterTree(state, {
  token: (state) => state.token,
  hasSession: (state) => !isEmpty(state.token),
  currentUser: (state) => state.currentUser,
})

export const mutations = mutationTree(state, {
  [CommonMutationType.ResetState]: (s) => {
    Object.assign(s, state())
  },
  setToken: (state, token: string) => {
    state.token = token
  },
  setCurrentUser: (state, user: User) => {
    state.currentUser = user
  },
})

type LoginPayload = { email: string; password: string }

export const actions = actionTree(
  { state, getters, mutations },
  {
    async signIn({ commit }, { email, password }: LoginPayload) {
      const authService = new AuthService(this.app.$accessor)
      const userService = new UserService(this.app.$accessor)

      const loginResponse = await authService.signIn(email, password)
      if (!isSuccess(loginResponse)) {
        // show error
        return
      }
      const { token } = loginResponse.data
      const userResponse = await userService.getSelf({ token })
      if (!isSuccess(userResponse)) {
        // show error
        return
      }
      const user = userResponse.data

      commit('setToken', token)
      commit('setCurrentUser', user)
      this.$router.push('/main')
    },

    signOut({ dispatch }) {
      const authService = new AuthService(this.app.$accessor)
      authService.signOut() // no async

      dispatch('resetAll', null, { root: true })
      this.$router.push('/')
    },

    async signUp(_, newUser: SignUpUser) {
      const { $accessor } = this.app
      const userService = new UserService($accessor)

      const userResponse = await userService.create(newUser, { token: false })
      if (!isSuccess(userResponse)) {
        // show error
        return
      }

      const { email, password } = newUser
      const { signIn } = $accessor.auth
      signIn({ email, password })
    },
  }
)
