import { Component, Vue } from 'nuxt-property-decorator'
import NavBrand from './NavBrand.vue'
import NavMenu from './NavMenu.vue'

@Component({
  components: {
    NavBrand,
    NavMenu,
  },
})
export default class extends Vue {}
