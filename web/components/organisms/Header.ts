import { Component, Vue } from 'nuxt-property-decorator'
import HeaderNav from '~/components/molecule/Header/HeaderNav.vue'
import AuthorizedHeaderNav from '~/components/molecule/Header/AuthorizedHeaderNav.vue'

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
