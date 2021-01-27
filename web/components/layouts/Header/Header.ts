import { Component, Vue } from 'nuxt-property-decorator'
import HeaderNav from './HeaderNav.vue'
import AuthorizedHeaderNav from './AuthorizedHeaderNav.vue'

@Component({
  components: {
    HeaderNav,
    AuthorizedHeaderNav,
  },
})
export default class extends Vue {
  get authorized() {
    return this.$accessor.auth.hasSession
  }
}
