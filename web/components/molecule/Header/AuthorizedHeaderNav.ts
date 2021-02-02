import { Component, Vue } from 'nuxt-property-decorator'
import NavBrand from './NavBrand.vue'
import AuthorizedNavMenu from './AuthorizedNavMenu.vue'

@Component({
  components: {
    NavBrand,
    AuthorizedNavMenu,
  },
})
export default class extends Vue {}
