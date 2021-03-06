import { Component, Vue } from 'nuxt-property-decorator'
import Logo from '~/components/atoms/Logo.vue'
import { unauthenticatedOnly } from '~/middleware'

@Component({
  components: {
    Logo,
  },
  middleware: unauthenticatedOnly,
})
export default class extends Vue {}
